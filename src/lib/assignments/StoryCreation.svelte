<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    Now that we've had a conversation with the customer, it's time to break these bigger goals into individual stories.
    We call them stories because they are a story about something that can be done from the users perspective.
  </p>

  <section>
    <h2>INVEST</h2>

    <p>
      When you're writing stories, keep the acronym <a href="https://www.agilealliance.org/glossary/invest/">INVEST</a> in
      mind:
    </p>

    <ul>
      <li><strong>I</strong>ndependent</li>
      <li><strong>N</strong>egotiable</li>
      <li><strong>V</strong>aluable</li>
      <li><strong>E</strong>stimable</li>
      <li><strong>S</strong>mall</li>
      <li><strong>T</strong>estable</li>
    </ul>

    <section>
      <h3>Independent</h3>

      <p>
        An independent story is one which does not have any other stories as a prerequisite. We want to always focus on
        what's most valuable to the customer, but if you create a number of inter-dependent stories it could take several
        weeks or even months before you're able to realize any benefit.
      </p>

      <p>
        It might seem like there are dependencies all over the place, but it's often possible to approach things
        independently with a little thought. Consider the checkout page, does it need a user account? How about a shopping
        cart and item pages? What's important to understand is that these are business requirements, not technical
        constraints.
      </p>

      <p>
        While you may need those things for the software to get to a point where the customer wishes to deploy it, there are
        easier ways to fake it in the interim. A checkout page may need to be able to show the contents of a cart, but that
        doesn't mean you needed an item page to populate it. Maybe you have a little script that loads up a few items, or
        perhaps a page with buttons that drop a number of things in all at once. The point is that despite your intuition,
        the "Checkout" story is independent of the "Item" story.
      </p>
    </section>

    <section>
      <h3>Negotiable</h3>

      <p>
        A story is negotiable when it has a bit of wiggle room in its description. When the expectation is specified in
        excruciating detail, it leaves little room to make adjustments based on practical problems as it's being
        implemented.
      </p>

      <p>
        Let's return to the checkout page, and specifically the list of items that is being purchased (checkout page is
        actually too big, we'll get to that in "small"). One approach could be to write out exactly how that item should
        appear, perhaps even provide a mock-up. Unfortunately, this makes the story less negotiable, decreasing its
        flexibility.
      </p>

      <p>
        This one is tough for a lot of programmers, as a whole we tend to prefer exact specifications. The problem with
        those is it discourages adjustment when things go awry. For example, let's say we realize that some items are
        tracked by weight and others by quantity. With a detailed specification we're more committed to a design that
        doesn't take that nuance into account, and so we'll be more resistant to alter it to fit that problem.
      </p>
    </section>

    <section>
      <h3>Valuable</h3>

      <p>
        A story should provide value to the user. Technical work such as creating a database or setting up hosting, while
        extremely important, do not generate user value on their own. This ensures that not only is business value delivered
        every week, but that the solution isn't over-engineered.
      </p>

      <p>
        This is another tough one, sometimes it feels like, to achieve any value, a whole lot of technical work must be
        done. The idea here is that you attempt to find seams in the bigger technical goal that allow you to implement a
        smaller chunk of it.
      </p>

      <p>
        For example, suppose you need to set up a database. You could design the entire schema, write all of the code to
        interact with it, and deploy it all in one fell swoop, but this would be too much work to accomplish in a reasonable
        amount of time. Instead, you can carve out individual verticals related to the functionality involved.
      </p>

      <p>
        Returning to our example of listing items on the checkout page, you might decide that the details of the item should
        be stored in a database. To accomplish this, you would need to specify just enough schema to include the details
        related to the item, and just enough code to interact with that.
      </p>

      <p>
        Sometimes multiple stories require a common technical component, in those situations you simply need to communicate
        that whichever story comes first will need a little bit more effort to complete. So if you haven't deployed a
        database yet, you would explain during estimation (next weeks lesson) that whichever story requiring a database will
        be more expensive.
      </p>
    </section>

    <section>
      <h3>Estimable</h3>

      <p>
        A story is estimable if you can reasonably predict how much effort is required to complete the work. In practice,
        the smaller the story the easier it is to estimate, so if you're uncertain it usually makes sense to split it into
        smaller stories.
      </p>

      <p>
        Another way to put this is that there are no questions marks around what the story means. For example, if you're not
        certain all of the details necessary to build a checkout page, it's not estimable and you should divide it into
        smaller components which are.
      </p>

      <p>
        One thing which we'll run into a lot in our project is unfamiliar technology. It may be difficult to estimate how
        much work something is until you've looked into the underlying tools more extensively. The general way to resolve
        this is a research spike, a long thin piece of code that helps you understand what's necessary. A research spike is
        a story to estimate another story, and we'll be using those as we progress through the project.
      </p>
    </section>

    <section>
      <h3>Small</h3>

      <p>
        A story should be small, no story should be so large to allow your work in progress to drift too far from main
        codebase. Once drift like that occurs, it can be extremely difficult to pull things back together and get projects
        moving again, and sometimes you even end up concluding that parts of that work were the wrong direction.
      </p>

      <p>
        You want stories to be small enough that stakeholders can revisit the direction on a regular basis. So in our
        checkout example, perhaps after seeing part of how that page is unfolding they decide it needs to be reorganized. If
        they realize this after you've implemented a couple pieces, that's a lot less work than if you've already built the
        whole thing.
      </p>

      <p>
        The general advice on an Agile project is stories should take about 1-2 days of work, but that's guidance for more
        experienced developers. Since you're learning a lot of these things as you go along, I want you to make the changes
        extra small. How small? If you think it'll take you much more than an hour you should probably split it up.
      </p>
    </section>

    <section>
      <h3>Testable</h3>

      <p>
        A core tenet of Agile projects is heavy automated testing. We'll be getting to that topic in a few weeks, so don't
        worry too much about that one in this assignment. It's possible we may have to revisit a few stories later on, but
        being able to adjust a plan lies at the heart of what makes a project Agile.
      </p>
    </section>
  </section>

  <section>
    <h2>Story Format</h2>

    <p>
      A lot of people like to structure their stories in the form of a sentence. For example, instead of a story titled
      "Login" they would write "As a user, I want to login, so that I can place an order." I'm not expecting you to write
      stories in this structure, but it might seem a bit mysterious if you encounter it, so I wanted to address that topic
      briefly.
    </p>

    <p>
      The intention behind that structure is to ensure that they remain user-centric and add functionality. In effect,
      you're more likely to ensure a story contains value for a user in that format. In other words, as long as you hold
      user value in mind, it just makes stories harder to write.
    </p>
  </section>

  <section>
    <h2>Deliverables</h2>

    <p>
      In this exercise you will be taking the features we captured during our conversation with the client and dividing
      them into smaller stories in the <a href="https://github.com/users/lackita/projects/2/views/1">GitHub Project</a> to
      match the INVEST criteria outlined above. I recommend you make a copy of the project prior to beginning, so you have
      what was captured directly from the client for reference later on if you need it.
    </p>

    <p>
      This is another assignment that doesn't actually involve code changes, but you will still be submitting a Pull
      Request at the end. You should create a new file called <code>docs/story-creation.md</code> in which you'll answer the
      following questions:
    </p>

    <ul>
      <li>What did you like and dislike about breaking stories down in this way?</li>
      <li>What did you find difficult about this process?</li>
    </ul>

    <p>
      Since we'll be working from the results of this in our next class, you won't have an opportunity to make revisions.
    </p>
  </section>
</Assignment>
