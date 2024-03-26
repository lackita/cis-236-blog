<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    Most companies purport to practice some form of Agile software development, so it's important to
    understand what that entails. The Agile movement grew out of a <a
      href="https://agilemanifesto.org/">manifesto</a
    >:
  </p>

  <blockquote>
    <p>
      We are uncovering better ways of developing software by doing it and helping others do it.
      Through this work we have come to value:
    </p>
    <ul>
      <li>
        <span class="larger">Individuals and interactions</span> over processes and tools
      </li>
      <li>
        <span class="larger">Working software</span> over comprehensive documentation
      </li>
      <li>
        <span class="larger">Customer collaboration</span> over contract negotiation
      </li>
      <li>
        <span class="larger">Responding to change</span> over following a plan
      </li>
    </ul>

    <p>
      That is, while there is value in the items on the right, we value the items on the left more.
    </p>
  </blockquote>

  <p>
    There's a lot of power in these core ideas, and so we'll be using a form of it for the project
    in this course. I'll be covering the specifics of what that means in a few minutes, but first we
    should look at the different forms this will take in the wild.
  </p>

  <section>
    <h2>Methodologies</h2>

    <p>
      There are several different approaches to building an agile team, often referred to as
      methodologies. Unfortunately, many organizations have lost sight of the original intent of
      Agile, so it's extremely common to encounter an "Agile" company which follows some of the
      practices but doesn't uphold the core values.
    </p>

    <p>
      Nonetheless, if a company follows a methodology, there are a few activities you're likely to
      encounter in industry. So it's important to understand their origin, just don't be surprised
      if their execution is difficult doesn't seem to match these values.
    </p>

    <section>
      <h3>Scrum</h3>

      <p>
        <a href="https://www.scrum.org/">Scrum</a> is probably the most commonly practiced form of agile,
        the term comes from a Rugby term where players pack closely together in an attempt to retrieve
        the ball. It's not a perfect metaphor, but the core of this methodology is a daily meeting where
        each team member answers these three questions:
      </p>

      <ul>
        <li>What did you do yesterday?</li>
        <li>What are you working on today?</li>
        <li>What are any obstacles you're encountering?</li>
      </ul>

      <p>
        This meeting should be quick, 15 minutes or so, and is intended foster communication between
        team members without requiring bigger meetings later in the day. You'll often hear this
        referred to as a stand-up, since some teams will hold the meeting standing up to keep it
        quick.
      </p>

      <p>
        The other prominent feature is the sprint. We'll be covering estimation and planning more
        extensively in week 3, but briefly a sprint is a fixed unit of time which ends with a
        deployable piece of software. 1-2 weeks is fairly common, although it's not uncommon for it
        to expand to several weeks or even a month.
      </p>
    </section>

    <section>
      <h3>Extreme Programming</h3>

      <p>
        <a href="http://www.extremeprogramming.org/">Extreme Programming</a> has fallen out of fashion
        in recent years, but many Agile teams have adopted some of its practices. The general premise
        is to dial many of the practices people find valuable up to 11, and consists of 12 practices.
      </p>

      <dl>
        <dt>Pair Programming</dt>
        <dd>
          If code review is good, two people building the feature together (at the same computer) so
          it's done continuously is better.
        </dd>

        <dt>Planning Game</dt>
        <dd>
          This is a game to plan out the iteration. We'll be covering this more extensively in Week
          3.
        </dd>

        <dt>Test-Driven Development</dt>
        <dd>
          If automated testing is good, only writing code to satisfy a failing test is better.
        </dd>

        <dt>Whole Team</dt>
        <dd>
          The team should be comprised of everybody necessary to accomplish the project to avoid
          needing to coordinate between teams.
        </dd>

        <dt>Continuous Integration</dt>
        <dd>Changes are merged as soon as they're completed and all of the tests pass.</dd>

        <dt>Refactoring</dt>
        <dd>
          Rather than allow tech debt to grow, restructure the code immediately when encountered.
        </dd>

        <dt>Small Releases</dt>
        <dd>Deliver functionality in small but complete pieces.</dd>

        <dt>Coding Standards</dt>
        <dd>
          Follow an agreed-upon set of conventions, avoiding arguments around things like code
          formatting.
        </dd>

        <dt>Collective Code Ownership</dt>
        <dd>
          No individual owns any portion of the code, all parts of the codebase are owned by
          everybody.
        </dd>

        <dt>Simple Design</dt>
        <dd>Always prefer the simpler approach.</dd>

        <dt>System Metaphor</dt>
        <dd>
          Adopt a metaphor to describe the system which provides a common vocabulary to describe
          what's being built.
        </dd>

        <dt>Sustainable Pace</dt>
        <dd>Nobody works more than 40 hours a week to protect against burnout.</dd>
      </dl>
    </section>

    <section>
      <h3>GROWS Method</h3>

      <p>
        Frustrated with how the Agile community lost sight of its original purpose, Andy Hunt (one
        of the original authors of the Agile Manifesto) created a new methodology called <a
          href="https://growsmethod.com/">GROWS</a
        >. Rather than prescriptive, it aims to provide a framework teams can adapt to their
        individual needs.
      </p>

      <h2>Agile in This Class</h2>

      <p>
        One of the objectives of this course is to expose you to a typical Agile project. There are
        a number of practices which aren't going to fit within the box of a directed study, though,
        so it will be adapted to better suit that environment.
      </p>

      <p>
        One of the key themes of any Agile project is delivering iteratively over small iterations.
        We will aim to achieve a similar goal with your assignments, most weeks will involve a
        manageable change which produces a fully functional website. It definitely won't do
        everything the client is asking for, but it will be something they can see and interact
        with.
      </p>
    </section>
  </section>

  <section>
    <h2>Client Conversations</h2>

    <p>
      Communicating with clients can be difficult to navigate, since you'll be doing that next week,
      it's important to understand how to conduct that conversation. For this section, let's assume
      that the client requested a way to place delivery orders through the website.
    </p>

    <section>
      <h3>Pre-Meeting Research</h3>

      <p>
        Before you even enter the meeting, you should work to gather as much information as
        possible. If there's an existing site, spending time visiting every page and interacting
        with each element. If there's an order form and you have the budget to do so, placing an
        order and paying close attention to the experience.
      </p>

      <p>
        Don't restrict yourself to just what the client has created, seek out any additional
        information as well. News articles, wikipedia pages, customer reviews, track down as many
        sources of information as you can.
      </p>

      <p>
        As you do your research, think about makes them unique. Most businesses have a personality
        they're proud of, and your goal is to have a pretty good sense of this coming into the
        meeting.
      </p>

      <p>
        Also think about what their pain points are, most of the time that's what brought them to
        you. How was it difficult when you were interacting with their exiting site? What were the
        major themes of any negative reviews you found? In some ways, you should have an idea of the
        issues before they even tell you.
      </p>

      <p>
        Finally, don't have any expectations around bringing up this research during the
        conversation, that's not actually the point. All of these things you've learned the client
        is most likely all too aware of, the preparation is to help you quickly get to the heart of
        what needs to be done. We only have an hour to capture as much information as possible from
        them, anything you can figure out beforehand leaves time for better understanding what you
        need to accomplish.
      </p>
    </section>

    <section>
      <h3>Breaking Down Work</h3>

      <p>
        A shopping cart is a fairly large set of work, so the first thing you need to do is break it
        down into individual components. Rather than dictating a solution, you'll achieve this by
        asking questions that force them to think more about what that involves. Let's say these are
        the pieces they have in mind:
      </p>

      <ul>
        <li>An item page</li>
        <li>A page listing what's in a cart</li>
        <li>A checkout page that gathers payments</li>
        <li>An order page showing current and past orders</li>
        <li>A page on the backend that summarizes upcoming orders</li>
      </ul>

      <p>
        With some practice, you'll end up creating a list in your head automatically when people say
        they want to do something. Instead of sharing that, though, you would ask them questions to
        explore each of those aspects. So instead of responding to the request of a shopping cart
        with "you need an item page" you should respond with a question like "How would people add
        things to the cart?" Most likely they'd say through an item page, but they'll end up
        delivering more detail and occasionally even surprise you.
      </p>

      <p>
        From there, you need to continue breaking things down. For example, if you discover they
        want an order history, you should ask if customers should have an account. If they have an
        account and order history, it makes sense to ask if people want the option to place a past
        order again. They've probably thought a lot about the possibilities you could accomplish,
        keep asking questions to shake those memories loose.
      </p>

      <h2>Exploring Corner Cases</h2>

      <p>
        Once you feel like you have a pretty good sense of the specifics of a particular component,
        now it's time to explore all of the weird ways it could be used. In the case of an item
        page, you may have noticed in your research that the user can enter a weight or quantity.
        How would the checkout page display the price in that case? Is that intended to just be an
        estimate or would they end up being charged as part of experience?
      </p>

      <p>
        These corner cases are important to discuss, but can get in the way if asked too soon. It's
        extremely easy to spend an entire hour discussing a handful of corner cases, and that's not
        a good use of the little time we have. Focus first on mapping out what they want to
        accomplish from the site, then circle back to corner cases with remaining time.
      </p>
    </section>

    <section>
      <h3>You Won't Do It All</h3>

      <p>
        This session with the client is understanding their dream of what the site could be. You
        won't be able to build everything you cover in the meeting, and that's ok. In week 3 we'll
        be grounding these dreams in the reality of what can be accomplished, for this meeting let
        their imaginations run wild.
      </p>
    </section>

    <section>
      <h3>User Profiles</h3>

      <p>
        As you explore what the client wants, you have a secondary object: Understand the kinds of
        users who will interact with the system. Not everybody's going to want the same thing out of
        the site, and part of what you need to understand is the different kinds of users who will
        be interacting with the system.
      </p>

      <p>
        To give you an idea of the different kinds of people using the site, consider why somebody
        would land on the home page. What are they trying to accomplish? Are they trying to place a
        delivery order? Maybe they're trying to figure out how to get to the farm stand. We'll be
        spending more time on these concepts in week 5, but you should be thinking about these
        questions as you have this conversation.
      </p>
    </section>
  </section>
</Lecture>

<style>
  .larger {
    font-size: larger;
  }
</style>
