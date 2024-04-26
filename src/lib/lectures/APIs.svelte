<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    Today we're going to be discussing APIs, which in many ways are central to providing more
    advanced functionality. Take payments as an example, it used to be the case that if you wanted
    to take payments on your site you had to build code to handle credit card processing and pass
    extremely difficult audits to store and manage that information. Nowadays there are a host of
    APIs you can call from the backend to manage the provided payment information.
  </p>

  <p>
    To work with a company's API, you're somewhat reliant on that partner setting up facilities to
    make it easy and safe to develop and test your code. The one you'll be working with in your
    assignment is rather complete in this regard, but you should be aware that the spectrum is
    pretty broad.
  </p>

  <section>
    <h2>RESTful APIs</h2>

    <p>
      When we covered <a href="cookies-sessions-and-caching">Cookies</a>, I introduced the structure
      of an <code>HTTP</code> request. At the time I mentioned that <code>GET</code> and
      <code>POST</code> were the most common verbs used, but in APIs a broader range is typically employed
      to provide more meaningful endpoints. Here's the basic meaning of those that are commonly used:
    </p>

    <dl>
      <dt><code>GET</code></dt>
      <dd>Used to retrieve data, requests using this verb should not alter the system</dd>

      <dt><code>POST</code></dt>
      <dd>Make a general change to the system</dd>

      <dt><code>PUT</code></dt>
      <dd>Create or replace a specific resource</dd>

      <dt><code>DELETE</code></dt>
      <dd>Delete a resource</dd>

      <dt><code>PATCH</code></dt>
      <dd>Partially modify a resource</dd>
    </dl>

    <p>
      It might be easiest to understand how these concepts work with an example. Suppose we wanted
      to create an API for placing and viewing orders, here's the endpoints that might be created
      and what they do:
    </p>

    <dl>
      <dt><code>GET /orders/5</code></dt>
      <dd>Retrieve information about the order with ID of 5</dd>

      <dt><code>POST /orders</code></dt>
      <dd>Create an order</dd>

      <dt><code>PUT /orders/5</code></dt>
      <dd>Create an order with the ID of 5, or replace that order if it already exists</dd>

      <dt><code>DELETE /orders/5</code></dt>
      <dd>Remove the order with the ID of 5</dd>

      <dt><code>PATCH /orders/5</code></dt>
      <dd>
        Update the order with the ID of 5, leaving any unspecified information as the old value
        (e.g. a new items list is sent but the address was excluded and therefore didn't change)
      </dd>
    </dl>

    <p>
      These endpoints represent an abstraction on top of orders, but the actual implementation can
      vary widely. Let's consider a few different ways the underlying abstraction could be
      implemented.
    </p>

    <p>
      The most obvious choice, and the one used by most of the web, is a database table. Here's how
      the methods map to SQL operations:
    </p>

    <dl>
      <dt><code>GET</code></dt>
      <dd><code>SELECT</code></dd>

      <dt><code>POST</code></dt>
      <dd><code>INSERT</code></dd>

      <dt><code>PUT</code></dt>
      <dd>Combination of <code>INSERT</code> and <code>UPDATE</code>, more on this later</dd>

      <dt><code>DELETE</code></dt>
      <dd><code>DELETE</code></dd>

      <dt><code>PATCH</code></dt>
      <dd><code>UPDATE</code></dd>
    </dl>

    <p>Another possibility would be to represent it files in a file system:</p>

    <dl>
      <dt><code>GET</code></dt>
      <dd>Get the contents of the file</dd>

      <dt><code>POST</code></dt>
      <dd>Create a new file</dd>

      <dt><code>PUT</code></dt>
      <dd>Create or replace a file</dd>

      <dt><code>DELETE</code></dt>
      <dd>Delete a file</dd>

      <dt><code>PATCH</code></dt>
      <dd>Apply a diff to an existing file</dd>
    </dl>

    <p>
      You aren't limited to the obvious choices, though, it's also possible to get way out there and
      implement it in something like the blockchain. Etherium is able to store and retrieve
      information, so would be equally valid as an implementation.
    </p>

    <p>
      The important thing to understand is that all of these different implementations could serve
      the same API. If you needed to change out implementations of the API for some reason, the
      people calling it wouldn't have to change and don't even need to be aware that it's different.
    </p>

    <p>
      People often refer to this structuring of an API as a <a
        href="https://en.wikipedia.org/wiki/REST">REST</a
      >
      (or RESTful) API, which stands for "representational state transfer." As with many academic concepts
      in Computer Science, though, the colloquial meaning has
      <a href="https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven"
        >drifted quite a bit</a
      > from the formal definition. You can read about the formal meaning if you're interested, but I've
      focused on how people use this concept day to day.
    </p>
  </section>

  <section>
    <h2>Idempotence</h2>

    <p>
      One thing that might be difficult to understand is the difference between <code>PUT</code> and
      <code>POST</code>. The core difference between the two is
      <a href="https://en.wikipedia.org/wiki/Idempotence">idempotency</a>, when <code>PUT</code> is
      called multiple times it only changes the system on the first call. In our example you could
      say that if you called <code>POST /orders</code> 10 times, 10 records would be created; but if
      you called <code>PUT /orders/5</code> 10 times, a new record would be created only on the first
      call.
    </p>

    <p>
      Idempotent operations are also valuable when performing database migrations. Sometimes a
      migration fails partway through, and by making the change idempotent the already changed
      records would not be affected by rerunning the migration.
    </p>
  </section>

  <section>
    <h2>Formats</h2>

    <p>
      The vast majority of APIs will be implemented using JSON, it's simple to understand and the
      libraries to handle it are fairly ubiquitous. It definitely has its limitations, though, such
      as limited data types and lack of extensibility. Most people get around these limitations by
      convention, but other solutions also exist.
    </p>

    <p>
      An old but still prominent player is <a href="https://en.wikipedia.org/wiki/SOAP">SOAP</a>,
      which is an XML-based protocol that allows for a formal definition of the request structure.
      It is extensible enough to allow more robust types, which can be make interaction more stable,
      but it also is much more cumbersome to interact with than JSON. There's nothing wrong with
      SOAP, but expect to spend more time upfront figuring out how to get the request structured
      correctly.
    </p>

    <p>
      One drawback of SOAP is that it's extremely verbose, and sending/receiving those extra
      characters can eat a lot of bandwidth. <a
        href="https://en.wikipedia.org/wiki/Protocol_Buffers">Protocol Buffers</a
      > provide a lot of the same benefits of SOAP, but serialize into a binary format that's extremely
      compact. It has some general popularity, but the most prominent place you will encounter it is
      libraries developed by Google, as they designed the format originally.
    </p>
  </section>

  <section>
    <h2>Authentication</h2>

    <p>
      Often times, you will need some way of proving your identity in order to interact with an API.
      You'll encounter a range of different ways to do this, as with most things in Software
      Engineering, people choose different approaches because of the various tradeoffs involved.
    </p>

    <p>
      The simplest way to do this is with an API key, which is a static string generated for you
      that's sent with every request in some way. Sometimes this is sent in a header, but sometimes
      people will want you to send it somewhere in the body of the request. While simpler, since
      it's sent with every request, there's more chances to steal the token and impersonate your
      application.
    </p>

    <p>
      If you're sending the same API key in every request, technically there's no header dedicated
      to this purpose, but people will sometimes abuse the <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"
        ><code>Authorization</code> header</a
      >. The format of this header is
      <code>{`Authorization: <auth-scheme> <authorization-parameters>`}</code>, and people use the
      <a href="https://datatracker.ietf.org/doc/html/rfc6750"><code>Bearer</code> scheme</a> to send
      the key every time. This scheme is supposed to be the first step in an OAuth authentication flow,
      more on that later.
    </p>

    <p>
      The <code>Authorization</code> header has a number of different schemes, and you may end up
      encountering others. The details of the various schemes are typically negotiated by libraries.
      One common scheme is <code>Basic</code>, which is used if you have a username and password;
      usually your library will do this for you, but it's technically sent
      <a href="https://en.wikipedia.org/wiki/Base64">base64 encoded</a>.
    </p>

    <p>
      The most secure method you'll commonly encounter is <a
        href="https://en.wikipedia.org/wiki/OAuth">OAuth</a
      >. This scheme technically has several different forms depending on the use case, to better
      understand how it works I'll describe what happens under the covers when you login to a
      website with something like Facebook or Google. Here's the basic sequence of events if we were
      to implement authentication with Facebook on North of Boston:
    </p>

    <ol>
      <li>You visit North of Boston</li>
      <li>You click the link to "Login with Facebook"</li>
      <li>
        North of Boston sends you to a page hosted by Facebook with some information identifying the
        request as coming from North of Boston
      </li>
      <li>You approve access</li>
      <li>
        You get redirected back to a page specific to OAuth on North of Boston with an access token
      </li>
      <li>
        North of Boston makes a request to Facebook with the access token, receiving a more
        permanent token it can use in future API requests
      </li>
      <li>You get redirected somewhere else on the site and are fully authenticated</li>
    </ol>

    <p>
      There are libraries around to help make this process easier, but because it involves
      coordinating many requests requiring user interaction, they're typically a little difficult to
      get working well. That being said, the process is nuanced enough it's worth looking around a
      bit for something, it can be tricky to implement correctly.
    </p>
  </section>

  <section>
    <h2>Status Codes</h2>

    <p>
      We discussed <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
        >status codes</a
      >
      briefly when <a href="cookies-sessions-and-caching">we covered cookies</a>, but it's helpful
      to understand them a little bit more thoroughly when working with APIs. The first thing to
      understand is that the first digit conveys the category of the response:
    </p>

    <dl>
      <dt>100</dt>
      <dd>Informational - you won't see this one all that much</dd>

      <dt>200</dt>
      <dd>Success - in API requests this is typically what you hope to get</dd>

      <dt>300</dt>
      <dd>Redirect - not used in APIs all that much</dd>

      <dt>400</dt>
      <dd>Client error - something went wrong on your end</dd>

      <dt>500</dt>
      <dd>Server error - something went wrong on the API side</dd>
    </dl>

    <p>
      For most of these ranges, all you really need to know is the meaning of that first digit.
      Since 400 responses represent something going wrong with how you're interacting with the API,
      though, here are a few you'll probably find useful to know off the top of your head:
    </p>

    <dl>
      <dt>400</dt>
      <dd>
        Bad Request - the server is basically telling you it didn't know what to do with what you
        sent
      </dd>

      <dt>401</dt>
      <dd>Unauthorized - you need to authenticate in some way to call this endpoint</dd>

      <dt>403</dt>
      <dd>
        Forbidden - you're authenticated, but still not allowed to interact with this endpoint
      </dd>

      <dt>404</dt>
      <dd>Not Found - I'll assume you already know this one :)</dd>

      <dt>418</dt>
      <dd>I'm a teapot - well, if the API is a teapot I feel like that's important to know</dd>

      <dt>429</dt>
      <dd>
        Too many requests - many APIs will limit the rate at which you can make requests, you'll get
        to know this one well in API heavy applications
      </dd>
    </dl>

    <p>
      Don't feel like you have to go out and memorize these, but you'll get pretty familiar with
      them the more you work with APIs. I work with APIs quite a bit and I still sometimes have to
      remind myself of the difference between 401 and 403 occasionally.
    </p>
  </section>

  <section>
    <h2>Exploration and Testing</h2>

    <p>
      The process of building logic to work with an API can be a little tricky. It's easy enough to
      make a simple request, but creating logic to handle all of the ways that request can fail is
      complicated. On top of that, many APIs will charge for each call that you make, so limiting
      the number of requests wherever possible can become important quickly.
    </p>

    <p>
      The better APIs will provide a sandbox or test account that you can use to build your system.
      In these systems, you have the ability to try out requests and examine responses, even run
      automated tests to ensure that interaction still works as well as it did before. If you're
      lucky, they'll even have specific data in place to simulate different types of failures that
      can occur; for example, Twilio offers <a
        href="https://www.twilio.com/en-us/blog/using-test-credentials-magic-phone-numbers-twilio-applications"
        >magic phone numbers</a
      > that are configured in predictable ways such as invalid phone numbers or ones where text messaging
      is blocked.
    </p>

    <p>
      Many APIs these days are specified using something called <a href="https://www.openapis.org/"
        >OpenAPI</a
      >, which is an open standard that split off from <a href="https://swagger.io/">Swagger</a>.
      Some people will still call it Swagger, as they gained a lot of popularity before the standard
      was separated. When an API is specified in this manner, it's extremely popular to generate
      documentation off of the specification, and the documentation generation tools will often
      provide a way to interactively call the API. This can sometimes be helpful during exploration,
      but be wary as occasionally it just won't work with how the API is designed.
    </p>

    <p>
      When I need to start building interaction with an API, I typically find it helpful to first
      play around with it a little bit to get a sense of how it works. I'll sometimes try to use the
      interactive documentation I mentioned above, but because it can often not work I will usually
      quickly drop into some more robust tool. Many people like <a href="https://www.postman.com/"
        >Postman</a
      >, and that's a perfectly fine tool as long as you don't mind constantly ignoring their nudges
      to upgrade to the paid version. As a grizzled Unix programmer, though, I'll often just use
      <a href="https://curl.se/">curl</a> as it's already on most systems.
    </p>

    <p>
      Once I have a sense of how it operates, I'll try to strip back to the simplest request that I
      can possibly make. It's tempting to throw information into the request until it works and then
      not touch it, but typically this leads to a poor understanding of what's actually going on. By
      getting something simple and layering on information to achieve different objectives, I feel
      like I have a much deeper understanding of how the API actually operates.
    </p>

    <p>
      Once I have a strong understanding of the endpoints I need to use, I'll create a class
      dedicated to interaction with that API. Even if my language has a package to work specifically
      with that API, I'll layer my own class on top of that to communicate my understanding of how
      it works. This layer also allows me to build an abstraction that can be swapped out during
      automated testing, as API calls are slow and potentially expensive.
    </p>
  </section>
</Lecture>
