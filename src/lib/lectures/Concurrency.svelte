<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    Last week was an introduction to databases, but I neglected to cover an important topic to
    understanding how to work with them. The facilities necessary to efficiently wait for events
    outside of the program is an important element of any language, and this is typically known as
    concurrency. You've most likely touched on the topic in previous classes, but we're going to
    build the idea up from first principles so you have a frame of reference when I discuss how
    Javascript handles this concept.
  </p>

  <section>
    <h2>Inefficient Approach</h2>

    <p>
      Suppose we want to implement a sleep function for Javascript. A naive implementation of the
      function could look something like this:
    </p>

    <pre><code>
{`
function sleep(seconds) {
  const start = new Date();
  while((new Date() - start) / 1000 < seconds) {
    console.log("sleeping");
  }
}
`}
    </code></pre>

    <p>
      This could indeed solve the problem, but if you ran this code you'd see an immense number of
      logs even for a single second. That alone might seem not that bad, but this loop is actively
      waiting for the event to occur, which is preventing other processes in the system from
      running. This is typically known as busy waiting.
    </p>
  </section>

  <section>
    <h2>First Class Functions</h2>

    <p>
      To understand how Javascript solves this problem, it's important to understand the notion of a
      first class function. Consider a simple function like this:
    </p>

    <pre><code
        >{`
function double(x) {
  return 2 * x;
}
`}</code
      ></pre>

    <p>
      Of course, the typical way you call this is <code>double(2)</code>, but in Javascript you can
      also assign it to a variable like this:
    </p>

    <pre><code
        >{`
const times_two = double;
times_two(2);
`}</code
      ></pre>

    <p>
      This ability to treat functions like variables is a feature of some programming language
      called "first class functions". The general idea is that functions are just like any other
      object and can therefore be treated as such.
    </p>

    <p>
      I believe I covered a use of <code>map</code> in a code review earlier this semester. It's a good
      example of a practical application of a first class function, it takes a function and returns a
      new list containing the result of the function applied to each element on the list.
    </p>

    <p>
      With the <code>double</code> function, if you called <code>[1, 2, 3].map(double)</code> it
      would result in <code>[2, 4, 6]</code>. There are a whole host of functions for dealing with
      lists that involve first class functions; most of them come from Lisp, but the technique is
      powerful enough that they've permeated most languages by now in some form.
    </p>

    <p>
      Often times, you only need the function in the place where it's passed in, so when ECMAScript
      6 was relesed in 2015 they introduced something called lambda syntax. Instead of defining <code
        >double</code
      >, that means you could define it with the call to <code>map</code> directly like this:
    </p>

    <pre><code>[1, 2, 3].map((x) => 2 * x)</code></pre>

    <p>
      It's also possible in more complicated scenarios to have a multi-line call. In this case you
      need to explicitly call <code>return</code> like a normal function:
    </p>
    <pre><code
        >{`
[1, 2, 3].map((x) => {
  return 2 * x;
})
`}</code
      ></pre>

    <p>
      One thing to be aware of is that this means you can't use curly braces to produce objects
      without the explicit return syntax. Intuitively, you may want to do something like this:
    </p>

    <pre><code>[1, 2, 3].map((x) => {`{ original: x, double: 2 * x }`})</code></pre>

    <p>
      Because this conflicts with the multi-line syntax you instead need to do something like this:
    </p>

    <pre><code>
[1, 2, 3].map((x) => {`{
  return { original: x, double: 2 * x };
}`})
</code></pre>
  </section>

  <section>
    <h2>Promises</h2>

    <p>
      Now let's return to our <code>sleep</code> example. The tool in Javascript for doing something
      after a fixed period if time is
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"
        ><code>setTimeout</code></a
      >. It takes a first class function and a period of time and calls the provided function after
      that period of time has elapsed.
    </p>

    <pre><code>setTimeout(() => console.log("delay completed"), 1000);</code></pre>

    <p>
      So we have a way of executing something after the desired time period. We could put all of the
      subsequent functionality in that callback, but this can get out of control rather quickly.
      Consider if we want to wait 1 second between a series of actions, the code would look
      something like this:
    </p>

    <pre><code
        >{`
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
`}</code
      ></pre>

    <p>
      As you can see, this can quickly get out of control, it's known as the <a
        href="https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)">Pyramid of Doom</a
      >. To get ourselves out of it, I'm first going to introduce something that will seem like it
      will make things worse.
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
        >Promises</a
      > in Javascript are a more general form of this callback model, again using first class functions.
    </p>

    <p>
      Whereas <code>setTimeout</code> allows you to execute code after a specific event, a
      <code>Promise</code>
      makes it possible to convert any block of code into one that supports callbacks. To understand
      this, here's how we could rewrite our <code>sleep</code> function using a
      <code>Promise</code>:
    </p>

    <pre><code
        >{`
function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}
`}</code
      ></pre>

    <p>
      Now this code returns right away, but instead of returning nothing it returns a <code
        >Promise</code
      >. You can then attach code to the promise to execute when it completes, like this:
    </p>

    <pre><code>sleep(1).then(() => console.log("completed"))</code></pre>

    <p>Now let's return to our Pyramid of Doom and see how this doesn't help things at all:</p>

    <pre><code
        >{`
sleep(1).then(() => {
  console.log("1");
  sleep(1).then(() => {
    console.log("2");
    sleep(1).then(() => {
      console.log("3");
    });
  });
});
`}</code
      ></pre>

    <p>
      I suppose it's not quite as bad, the time isn't pushed out of sight and you can specify in the
      more intuitive seconds. But a <code>Promise</code> gets us closer to breaking out of the pyramid
      altogether.
    </p>
  </section>

  <section>
    <h2>Asynchronous Functions</h2>

    <p>
      The <code>await</code> keyword allows us to hold execution until a <code>Promise</code> is resolved.
      So we could also write the code above like this:
    </p>

    <pre><code
        >{`
await sleep(1);
console.log("1");
await sleep(1);
console.log("2");
await sleep(1);
console.log("3");
`}</code
      ></pre>

    <p>
      If you've been following along in a console somewhere, this one probably won't work
      particularly well out of the box. We can wrap the lines in a function to solve the problem,
      but calling <code>await</code> in functions is only valid if the function uses the
      <code>async</code> keyword:
    </p>

    <pre><code
        >{`
async function sleep_demo() {
  await sleep(1);
  console.log("1");
  await sleep(1);
  console.log("2");
  await sleep(1);
  console.log("3");
}
`}</code
      ></pre>

    <p>
      What the <code>async</code> keyword is doing is wrapping the return value of
      <code>sleep_demo</code>
      in a <code>Promise</code> without you ever having to create one directly. So when you call it,
      you should also use the <code>await</code> keyword:
    </p>

    <pre><code>await sleep_demo();</code></pre>

    <p>
      This makes a certain amount of sense, the code waiting for a <code>Promise</code> to resolve
      must itself be a <code>Promise</code>. This is the modern way of dealing with concurrency, so
      you'll see <code>async</code> and <code>await</code> pop up all over Javascript code.
    </p>
  </section>

  <section>
    <h2>Databases</h2>

    <p>
      How this applies to the assignment you started last week is that databases are all about calls
      to external systems. As soon as you call a query, the code is stuck waiting for it to
      complete. If this were solved using busy waiting, the web server would be unable to field
      additional requests until the query finished.
    </p>
  </section>
</Lecture>
