<h1>Planning and Web Frameworks</h1>

<p>
  Now that we have an idea of what the client is looking for, it's time to
  actually start building something. In order to know what to build, though, we
  have to have a plan. This class you're going to learn the Agile approach to
  planning, and get an introduction to different kinds of web frameworks
  available.
</p>

<h2>Planning</h2>

<p>
  The problem with a plan is it rarely survives far into a project. Of course,
  there's that rare situation where nothing goes wrong, but almost always you
  will encounter things which will disrupt them entirely. We call the
  methodology we're using in this course Agile because it's able to quickly
  respond to these changes and adapt.
</p>

<p>
  Adapting to these changing needs requires an entirely different way of looking
  at planning a project. Rather than write out everything we will be
  accomplishing in meticulous detail, it focuses on implementing exactly the
  functionality that delivers the highest business value. Those priorities are
  reevaluated frequently, allowing the client to adjust what's being worked on
  as their needs evolve.
</p>

<h3>Estimation</h3>

<p>
  To accomplish this, we need to provide an estimate of the effort involved. If
  you've ever tried to estimate how long a software project will take, you'll
  know how futile an effort that can be, but it's much more reasonable to
  determine the relative difficulty between tasks.
</p>

<p>
  For example, you may have no idea how difficult it is to determine the amount
  of time it will take you to build a checkout page. Comparing it to how much
  effort the item page was, though, is a much more approachable endeavor.
</p>

<p>So an Agile estimation meeting goes a little something like this:</p>

<ol>
  <li>Pick a story.</li>
  <li>
    All members of the team independently come up with a value based on how it
    compares to previously estimated stories.
  </li>
  <li>If there's disagreement in the value, they discuss why they disagree.</li>
  <li>
    After the discussion, if everybody's on the same page, that value is marked
    down.
  </li>
  <li>
    If there was wide disagreement, a new round of voting on the same story
    commences.
  </li>
  <li>Begin again on a new story.</li>
</ol>

<p>
  You may have noticed a flaw in this approach, which is that it only works once
  you have stories already estimated. How do you estimate that first story?
  Simple, you make up a number. Think of that first story as the unit of
  measurement that all new stories are measured against. Whenever you're
  uncertain of how much to estimate on a story, think back to this standard and
  ask yourself if it's more or less difficult than that original story.
</p>

<p>
  In person, people typically either raise a number of fingers at the same time
  or reveal playing cards simultaneously. This is a popular enough activity that
  there are a number of online tools to do the playing card option, we'll be
  using <a
    href="https://firepoker.app/#/games/85497c74-f1b9-557e-1d27-ea82f16fef70"
    >this one</a
  >, but there are lots of good options.
</p>

<p>
  Let's return to our example of estimating the checkout page, assuming that the
  item page was previously estimated at 5 points. A typical estimation round
  would look something like this:
</p>

<ol>
  <li>
    I would introduce the checkout page (as the customers representative) and
    say a few words about what we're trying to accomplish.
  </li>
  <li>We would spend a couple minutes discussing the work involved.</li>
  <li>
    Once we feel like we have a clear understanding, we would each select a
    point value secretly.
  </li>
  <li>When we reveal, let's say I estimated 8 points and you estimated 13.</li>
  <li>We'd discuss why we chose the value that we did.</li>
  <li>
    In our conversation, you point out that the type of item can vary how the
    quantity is displayed.
  </li>
  <li>
    I realize I hadn't considered that, and decide to increase my estimate to 13
    to match yours.
  </li>
</ol>

<p>
  Sometimes in the conversation preparing to make the estimate, it becomes clear
  that the task is more complicated than we originally thought. We may decide at
  this point to split the story on the spot, creating two stories that break up
  the work so it's more manageable. This may also happen after the initial vote
  if there is either an extremely large or widely divergent result.
</p>

<h3>Iterations</h3>

<p>
  With estimated stories in hand, we have to decide how much work we're going to
  get done in the immediate future. To do that, we need to pick a period of time
  we're going to do it in, this period of time is commonly known as an iteration
  or sprint.
</p>

<p>
  The length of time you choose is often referred to as your cadence, and is
  typically one or two weeks long. Much longer that that and it becomes a lot
  easier for things to get out of control in my experience, but you may end up
  seeing 3 or 4 week sprints as well. Whatever cadence you choose, though,
  should be ironclad, it will be repeated over and over throughout the life of
  the project. Because of our class schedule, we'll be using a week for our
  iteration length.
</p>

<p>
  For the first iteration, the team ends up providing a guess on how many points
  they'll be able to get done. Keep in mind this is only a guess, it could be
  substantially more or less, and this is completely fine. The customer will
  then select a set of stories that fit within this guess, and because they
  follow INVEST they're free to pick whatever features are most valuable to
  them.
</p>

<p>
  With initial work selected, you'll set to work implementing these features. If
  the team ends up finishing things early, the customer will select additional
  stories, if it's too much there will be a pile of stories unimplemented at the
  end of the iteration. Either way, at the end of the iteration, the team will
  have completed some number of points in the iteration.
</p>

<p>
  This value will be used as the amount of points the customer can select for
  the following iteration. Over the next few iterations you'll begin to get a
  sense of how much the team can typically do in an iteration, and this value is
  referred to as the team's velocity. This value will continue to be tracked and
  evolve, but on healthy Agile teams it will remain relatively stable over time.
</p>

<h2>Web Frameworks</h2>

<p>
  In our first iteration, we will need to create the base site that everything
  else will be built on. Our options are typically referred to as web
  frameworks, and it's important to understand these different choices and their
  history.
</p>

<h3>CGI Scripts</h3>

<p>
  In the early days dynamic content for websites were generated by something
  known as <a href="https://en.wikipedia.org/wiki/Common_Gateway_Interface"
    >CGI Scripts</a
  >. This is actually somewhat of an umbrella term referring to a lot of
  different approaches, but typically it boiled down to a script in some
  language that generated HTML that would be provided by the web server.
</p>

<p>
  A CGI script could be written in just about anything. For example, here's a
  simple bash script:
</p>

<pre><code>
#!/bin/sh

echo "&lt;html&gt;"
echo "&lt;body&gt;"
echo "Hello World!"
echo "&lt;/body&gt;"
echo "&lt;/html&gt;"
</code></pre>

<p>
  CGI isn't at all standard, so this is just one form that could take, but the
  general notion is that it's generating some amount of HTML which can be sent
  as a response by the web server.
</p>

<h3>LAMP</h3>

<p>
  This process of assembling strings to represent HTML is extremely tedious, and
  in the '90s many people started introducing better ways of accomplishing that.
  The most prominent options in this era were PHP and Perl, and a typical page
  would look like this:
</p>

<pre><code>
&lt;html&gt;
  &lt;body&gt;
    &lt;?php echo "Hello World!" ?&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>
  So now the people had the ability to alter only the portion of the HTML which
  had to be dynamic. They often built this PHP/Perl code on top of an Apache
  server, running on Linux and communicating with a MySQL database. As a result,
  people started calling this setup the LAMP stack.
</p>

<h3>Model/View/Controller</h3>

<p>
  The tools of the LAMP era naturally caused all pages to be structured in this
  way:
</p>

<pre><code>
&lt;?php
  $query_results = fetch_hello_world_record_from_database();
  $hello_world = $query_results['hello'];
?&gt;

&lt;html&gt;
  &lt;body&gt;
    &lt;?php echo $hello_world ?&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>In other words, each page would consist of three things:</p>

<ul>
  <li>Model: An interaction with the database.</li>
  <li>
    Controller: Some code extracting values relevant on the page from database
    results.
  </li>
  <li>View: The HTML embedding the prepared values.</li>
</ul>

<p>
  The names I gave above weren't known by most of the web community, and in fact
  they sometimes didn't even practice that division. Often they'd query SQL
  right in the middle of the HTML and extract the relevant values from the
  result all in one line.
</p>

<p>
  Crossing these boundaries creates some severe maintenance problems. The
  biggest issue was that it made the code difficult to test, which in turn made
  it more challenging to revise as needs evolved. It also made the code more
  challenging to understand, the structure of the HTML was obscured by massive
  queries and data wrangling.
</p>

<p>
  In 2004, Ruby on Rails debuted which popularized the notion of
  Model/View/Controller, also referred to as MVC. It did this by forcing the
  following file structure on its projects:
</p>

<pre><code>
.
└── app
    ├── models
    │   └── greeting.rb
    ├── views
    │   └── greeting
    │       └── hello_world.html.erb
    └── controllers
        └── greeting_controller
</code></pre>

<p>
  It forced a lot of other design decisions on the developer as well, but
  offered in return greatly enhanced productivity making assumptions about those
  decisions. People refer frameworks imposing restrictions in exchange for
  productivity as opinionated, a term that got really popular as Rails spread
  like wildfire through the development community.
</p>

<h3>Single Page Applications</h3>

<p>
  So far, we've been discussing the evolution of backend applications and how
  their code structure has improved over time, but frontend development was
  going through a similar evolution. In the early days, Javascript logic
  interacted with HTML using lines like this:
</p>

<pre><code>
document.getElementById("something");
</code></pre>

<p>
  This was awkward and difficult to work with, which led to tools like jQuery
  which allowed people to instead do this:
</p>

<pre><code>
$("#something").
</code></pre>

<p>
  This made things a lot easier and many backend frameworks ended up adopting
  jQuery. In the early to mid 2010s, though, new frameworks such as AngularJS
  and React started shifting this paradigm. Most pages at this time were
  enormous piles of HTML, and although many frameworks had the ability to
  separate part of the html into a separate file, they were heavily tied to
  backend rendering.
</p>

<p>
  These new tools introduced a concept known as Components, which allowed people
  to define tags that represented larger concepts. A typical react app might
  look something like this:
</p>

<pre><code>
import React from "react";
import Greeting from "./Greeting";

render() {"{"}
  return (
    &lt;div className="component-app"&gt;
      &lt;Greeting text="Hello World!" /&gt;
    &lt;/div&gt;
  );
{"}"}
</code></pre>

<p>
  These components weren't known by web browsers, they were injected into a page
  after it loaded using Javascript. To achieve this, most pages using these
  frameworks had a small shell of HTML that called the Javascript which would
  hydrate the page with the actual content. This shell/hydration pattern led
  sites built using these tools to be called Single Page Applications or SPAs.
</p>

<p>
  Components may seem like a simple organizational tool, but they allow these
  front end frameworks to do something spectacular when complementary code
  exists on the backend. Instead of needing to generate all of the HTML on the
  server and ship it to the user, it only needs to communicate the change which
  occurred. This drastically reduced the payload of requests for these apps,
  making older sites feel sluggish by comparison.
</p>

<p>
  Achieving these results required Javascript to start being written on both the
  frontend and backend, but until this point Javascript really only ran in a
  browser. These new frameworks really only became possible because of an effort
  that began in 2009 called NodeJS which allowed people to begin writing
  Javascript on the server.
</p>

<h3>Modern Era</h3>

<p>
  Looking back, it's easy to point to these milestones, but it wasn't nearly as
  obvious when it was happening. New frameworks, libraries and tools were
  popping up constantly, and knowing which ones were worth pursuing and which
  were going to die off was not at all clear.
</p>

<p>
  If we look at this from a higher level, though, it seems like a new paradigm
  in web development emerges every ten years or so. That means that right now in
  2024, there's a strong possibility that some new paradigm is emerging that
  will change things drastically. There are no guarantees when attempting to
  predict what will or won't be successful, but there are a couple trends which
  are important to understand.
</p>

<p>
  The first is the expansion of JavaScript to backend code. Language fads will
  come and go over time, but because Javascript will always be in the web
  browser we'll never get away from it. As a result, it's very likely that it
  will gradually grow to dominance regardless of how much people dislike it.
</p>

<p>
  Secondly, notice the trend of improving code organization. People often latch
  onto the really cool things a new framework can accomplish, but the paradigm
  shifts seem to be accompanied by some improvement in the way code is
  organized. The cool ideas are what attract somebody to a framework, but this
  improved organization is most likely what keeps them there as new shiny things
  emerge.
</p>

<p>
  Finally, notice that HTML, Javascript and backend logic have all been strongly
  innovated, but CSS hasn't had the profound shifts these other building blocks
  have experienced. That's not to say it hasn't progressed at all, it's much
  better to write CSS today than it was 20 years ago, but nothing's come on the
  scene to drastically shift the way we engage with it. For example, SPAs allow
  encapsulation of Javascript and HTML, but still requires a global CSS
  stylesheet to control its appearance.
</p>

<p>
  So the next big shift in web development seems like it will take the form of a
  Javascript framework which allows CSS to be scoped to specific components.
  There is actually a new framework that fits this description, <a
    href="https://kit.svelte.dev/">SvelteKit</a
  >, and that's what we'll be using to build our project.
</p>
