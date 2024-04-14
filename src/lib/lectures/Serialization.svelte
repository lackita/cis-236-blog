<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    Last assignment, we were able to get a single item added to the shopping cart, but of course
    most people will want to order multiple items. We chose the scope of that assignment carefully,
    though, as generalizing from one to many items bumps into the limitations of the Storage API
    we're using for this purpose.
  </p>

  <section>
    <h2>Format Constraints</h2>

    <p>
      The natural inclination to store multiple items is to put them in an array. I went ahead and
      tried this in the console:
    </p>

    <pre><code>
$ localStorage.setItem("item_ids", [1, 2, 3])
undefined
</code></pre>

    <p>
      All good, right? Guess again, this is one of the rough edges with Javascript's permissive
      nature. Check out what it looks like when I pull it back out:
    </p>

    <pre><code>
$ localStorage.getItem("item_ids")
"1,2,3"
</code></pre>

    <p>
      So what actually got saved to local storage is a string, and that's because the <em>only</em> thing
      that can be saved to local storage is strings. I'm not sure if you ran into this in the assignment
      or it got resolved invisibly, but even numbers get converted to strings when they're being saved:
    </p>

    <pre><code>
$ localStorage.setItem("item_id", 1)
undefined
$ localStorage.getItem("item_id")
"1"
</code></pre>

    <p>
      To understand what's going on, check out the <code>toString</code> method, which is defined on
      every object in Javascript.
    </p>

    <pre><code>
$ [1, 2, 3].toString()
"1,2,3"
$ (5).toString()
"5"
$ "string".toString()
"string"
</code></pre>
    ​
    <p>
      Those objects turn into somewhat reasonable strings, but the default behavior is a lot less
      useful:
    </p>

    <pre><code
        >{`
$ let item = {item_id: 5}
undefined
$ item.toString()
"[object Object]"
`}</code
      ></pre>

    <p>But, if you define a function, <code>localStorage</code> will have no problems using it:</p>

    <pre><code
        >{`
$ item = {item_id: 5, toString: function() { return \`item_id: \${this.item_id}\` }}
Object { item_id: 5, toString: toString() }
$ item.toString()
"item_id: 5"
$ localStorage.setItem("item", item)
undefined
$ localStorage.getItem("item")
"item_id: 5"
`}</code
      ></pre>
  </section>

  <section>
    <h2>Serialization</h2>

    <p>
      This process of taking a data structure and converting it into a string is known as <a
        href="https://en.wikipedia.org/wiki/Serialization">Serialization</a
      >. The <code>toString</code> method is relatively workable in simple situations, as seen in the
      last assignment, but it can quickly get difficult to manage.
    </p>

    <p>To illustrate this, let's return to the stringified version of an array:</p>

    <pre><code>
$ let x = ["1", "2", "3"]
undefined
$ x.toString()
"1,2,3"
$ x.toString().split(",")
Array(3) [ "1", "2", "3" ]
</code></pre>

    <p>But what happens if a string containing a comma appears in the array?</p>

    <pre><code>
$ x = ["1", "2,3"]
Array [ "1", "2,3" ]
$ x.toString()
"1,2,3"
$ x.toString().split(",")
Array(3) [ "1", "2", "3" ]
</code></pre>

    <p>
      As you can see, the basic string conversion tooling can become insufficient rather quickly.
      The standard the industry has settled on is to convert to and from JSON. Javascript provides
      some basic facilities to do this (it stands for JavaScript Object Notation, after all):
    </p>

    <pre><code>
JSON.stringify(x)
'["1","2,3"]'
JSON.parse(JSON.stringify(x))
Array [ "1", "2,3" ]
    </code></pre>

    <p>
      Furthermore, it's capable of serializing and deserializing simple objects without the need for
      a custom method:
    </p>

    <pre><code
        >{`
$ JSON.stringify({ item_id: 5 })
'{"item_id":5}'
`}</code
      ></pre>

    <p>
      It's not a complete panacea, though, custom classes will have their information stripped away
      in the process:
    </p>

    <pre><code
        >{`
$ class Item {
$   constructor(item_id) {
$     this.item_id = item_id
$   }
$ }
undefined
$ JSON.stringify(new Item(5))
'{"item_id":5}'
`}</code
      ></pre>

    <p>
      There are different techniques and libraries to help deal with this problem, but often times
      they just make things too complicated. For our simple use case, for example, the facilities
      available are more than enough.
    </p>
  </section>
</Lecture>
