<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    When a user clicks on the add button of an item page, how does the site know what items were
    added in subsequent requests? There are different ways of dealing with this problem, each with
    its own set of tradeoffs and compromises. We'll be exploring several of these in this lesson,
    but I encourage you to first pause and think about how you'd approach the problem.
  </p>

  <section>
    <h2>Cookies</h2>

    <p>
      A simple way of keeping track of what's in a cart is to place that information in a <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">cookie</a
      >. To understand how cookies work, it's first important to understand how communication
      between the browser and your server occurs. When a user loads a page, they make an
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"><code>HTTP</code></a> request
      to your server that looks like this:
    </p>

    <pre><code>
GET /checkout
Accept: text/html
Host: northofboston-farm.vercel.app
</code></pre>

    <p>
      The first line describes the operation the server must perform and all subsequent lines define
      headers included in the request. When a form is submitted, you can also change the <code
        >GET</code
      >
      to a <code>POST</code> by changing the <code>method</code> attribute of the <code>form</code>
      element. The words <code>GET</code> and <code>POST</code> are different verbs that can be sent
      to the server, there are others as well but those two are the most common.
    </p>

    <p>
      A <code>POST</code> request also has to include the form data, also known as the payload. This
      is denoted in a request by adding information after a blank line. Let's say that a form has
      inputs named <code>test1</code> and <code>test2</code>, then the request for that
      <code>form</code> submission would look like this:
    </p>

    <pre><code>
POST /checkout
Accept: text/html
Host: northofboston-farm.vercel.app

test1=a&test2=b
    </code></pre>

    <p>
      The default <code>method</code> for a <code>form</code> submission is actually
      <code>GET</code>, when that occurs the payload is instead communicated in the location:
    </p>

    <pre><code>
GET /checkout?test1=a&test2=b
Accept: text/html
Host: northofboston-farm.vercel.app
    </code></pre>

    <p>
      There are some security and technical constraints with using <code>GET</code>, so people
      typically prefer to use <code>POST</code> for form submission. The main situation where
      <code>GET</code>
      is useful is that URLs produced can be shared with others and bookmarked. So, for example, if you
      have some search result you want to share with a friend, the fact that the search was performed
      using <code>GET</code> means that when you send over that URL your friend will see the same thing.
    </p>

    <p>When the server receives a request, it will produce a response that looks very similar:</p>

    <pre><code
        >{`
HTTP/1.1 200 OK
Date:	Thu, 11 Apr 2024 23:21:44 GMT
Server: Vercel

<html>
  <head>
    <title>An Example Page</title>
  </head>
  <body>
    <p>Hello World, this is a very simple HTML document.</p>
  </body>
</html>
  `}</code
      ></pre>

    <p>
      In this case you can think of the first line as a summary of the request. The part you'll be
      most interested in is the <code>200</code>, which is the status code. If you haven't heard of
      them before, you've probably seen the most famous one: <code>404</code>. Following that are
      again headers, and then a blank line and the payload.
    </p>

    <p>
      How this relates to cookies is, if the response contains the header <code>Set-Cookie</code>,
      the value specified will be included in all subsequent requests. So the response would instead
      looks like this:
    </p>

    <pre><code
        >{`
HTTP/1.1 200 OK
Date:	Thu, 11 Apr 2024 23:21:44 GMT
Server: Vercel
Set-Cookie: item_id=5

<html>
  <head>
    <title>An Example Page</title>
  </head>
  <body>
    <p>Hello World, this is a very simple HTML document.</p>
  </body>
</html>
  `}</code
      ></pre>

    <p>Now, when the next request on your site is made, it will instead look like this:</p>

    <pre><code>
GET /checkout
Accept: text/html
Host: northofboston-farm.vercel.app
Cookie: item_id=5
</code></pre>

    <p>
      This cookie will be sent by the browser every time until you or the user clears it. SvelteKit
      provides some facilities for setting and viewing cookies, which you can read about <a
        href="https://kit.svelte.dev/docs/load#cookies">here</a
      >.
    </p>

    <p>
      Even though it's technically possible to track specific information like <code>item_id</code>
      in cookies, including this information in every single request can be cumbersome. For that reason,
      often times instead a
      <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier">UUID</a> is stored in the
      cookie and more extensive information is written into some form of storage like a database.
    </p>

    <p>
      One thing to be cautious of with the use of cookies is the <a
        href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation">GDPR</a
      >. This law is a complex topic and I'm by no means an expert, so I don't want to mislead you
      here. My basic understanding is that as long as you limit cookie usage to just what's
      necessary for the functionality you provide, you should be on the right side of that law. But
      if you plan to use cookies extensively you'll need to spend some time figuring out how to
      ensure compliance.
    </p>
  </section>

  <section>
    <h2>Storage API</h2>

    <p>
      A more modern approach to tracking information between requests is to use the <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API">Storage API</a
      >. This allows you to use Javascript to store information on the users local machine, which
      allows more extensive navigation before needing to make the server aware of these choices.
      Fewer requests mean better performance and enhanced privacy, so this approach definitely has
      some appealing attributes.
    </p>

    <p>Here's how you set and get values from local storage:</p>

    <pre><code>
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
    </code></pre>

    <p>
      In SvelteKit, you'll be tempted to write something along these lines in <code
        >+page.svelte</code
      >:
    </p>

    <pre><code
        >{`
<script>
  const lastname = localStorage.getItem("lastname");
</script>
`}</code
      ></pre>

    <p>
      While this might seem to work at first, it's important to understand that the bare lines
      within a <code>script</code> tag have the chance to run before the page has had a chance to
      initialize. So facilities like <code>localStorage</code> may not yet have been created, to work
      around this you would need something more complicated like this:
    </p>

    <pre><code
        >{`
<script>
  import { onMount } from 'svelte';
  let lastname = "";
  onMount(async () => {
    lastname = localStorage.getItem("lastname");
  });
</script>
`}</code
      ></pre>

    <p>
      This will load the page initially with <code>lastname</code> set to an empty string. As a result,
      you will also need to make sure your page looks reasonable until that value is loaded.
    </p>

    <p>
      The <code>localStorage</code> facility will store information indefinitely, but sometimes you
      may only want this information to be stored until the user closes the window or tab. In this
      case you can use <code>sessionStorage</code> instead.
    </p>

    <p>
      One major drawback of this approach is it only works if Javascript is enabled. It may seem
      like nobody would be running without Javascript these days, but it's still possible and
      something to keep in mind.
    </p>
  </section>
</Lecture>
