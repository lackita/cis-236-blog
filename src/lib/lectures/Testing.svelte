<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    In the second half of the semester, we're turning our attention to the backend part of web
    development. We'll still be doing a smattering of frontend work, but the features and concepts
    will be geared towards components important for server side systems.
  </p>

  <p>
    Frontend changes can be very subjective, the color of a button and rounding of a corner can be
    tweaked endlessly. As we move into the more objective space of pure logic, though, it's
    important to have tools and processes that ensure that the system actually works as intended.
  </p>

  <h2>Acceptance Tests</h2>

  <p>
    Back in the <a href="/assignments/story-creation">story creation assignment</a>, I described the
    INVEST acronym. At that time, we didn't do a whole lot with the "Testable" part, but making
    stories testable is an important component of the Agile process.
  </p>

  <p>
    After having a conversation about a new feature, it's tempting to write down a description of
    what was covered like this:
  </p>

  <blockquote>
    When viewing an item, the user can add the item to a shopping cart by weight or quantity. This
    amount is then reserved in the inventory management system for a period of two hours to give the
    user time to complete their order.
  </blockquote>

  <p>
    This seems like a super reasonable description, but there's a ton of ambiguity there. Does the
    inventory management system track things in weight or quantity? What happens when the user
    selects the option that doesn't match that system? You'll need to have more conversations with
    the user to figure these things out, and that will require revision to the description above.
  </p>

  <p>
    As the complexity of the task grows, it becomes more and more difficult to keep track of all of
    the things you need to check. In addition, you might miss a detail the client finds important
    and they won't notice in the sea of words.
  </p>

  <p>
    As an alternative, you could list the things to be tested in order to consider the story done.
    The customer then has to agree that those tests passing in fact does represent completion of the
    story. So instead of the paragraph above you could have this list of tests:
  </p>

  <ul>
    <li>Test that an item can be added to the shopping cart</li>
    <li>Test that an item can be added by weight</li>
    <li>Test that an item can be added by quantity</li>
    <li>Test that the item is reserved in the inventory management system when added</li>
    <li>
      Test that, if the shopping cart has not been purchased within two hours of adding the item,
      the quantity becomes available again
    </li>
    <li>Test that, if the shopping cart has been purchased, the reservation is made permanent</li>
  </ul>

  <p>
    Now, when you have those later conversations with the client, more tests are added to the list.
    This list is an unambiguous record of what it means for the story to be completed, one that the
    client will sign off on.
  </p>

  <section>
    <h2>Automated Tests</h2>

    <p>
      At this point, you may be thinking about how to manually test all of those situations, and
      you'll probably be able to get the feature completed with this approach. Two months from now,
      though, let's say you've been asked to modify the item page to also be able to add items by
      fixed amounts.
    </p>

    <p>
      You'll work out the list of tests with the client and go off and build the feature. But what
      about the tests listed in the previous section, are they any less valid than before? Of course
      they're still valid, and since you're making changes in this area there's a high probability
      the behavior those tested will be changed as part of your work.
    </p>

    <p>
      So do you manually repeat all of those previous tests? What about tests in other parts of the
      system that are subtly impacted by these changes? Will you remember to go through all of them?
      In practice it's pretty easy to miss a few tests, hopefully you're lucky enough that things
      didn't change enough that they break as a result.
    </p>

    <p>
      But there's a better way to deal with this problem, and that's to introduce automated tests
      that cover each of these cases. These tests can be executed quickly and reliably whenever you
      want, and that will give you a much higher degree of confidence that the system is working as
      expected.
    </p>

    <p>
      This may seem like additional work to write a host of automated tests in addition to the
      actual logic. What that perspective fails to account for, however, is the fact that the longer
      it's been since the bug was introduced the harder it is to identify and repair. If you're
      running this suite of tests every few minutes, there's very few lines of code changed which
      could actually have caused the issue.
    </p>
  </section>

  <section>
    <h2>Unit Tests</h2>

    <p>
      What's challenging about testing a piece of functionality end to end is that sometimes the
      cause of the failure is extremely difficult to identify. That's why it's useful to build lower
      level tests that verify logic of specific methods, they can help you pinpoint that function
      when it starts experiencing issues.
    </p>

    <p>
      Figuring out what unit tests to write and when is a hotly debated topic. In class, I'll be
      demonstrating a technique known as <a
        href="https://martinfowler.com/bliki/TestDrivenDevelopment.html">Test-Driven Development</a
      >, which is what I use personally. Not everybody likes this discipline, though, many people
      simply write a pile of tests at the end of development.
    </p>
  </section>

  <section>
    <h2>Linting</h2>

    <p>
      In addition to the test cases that you write, there are programs known as linters which
      analyze the code without running it. This is also known as static analysis, and there are a
      lot of different programs out there to check various indications of problems.
    </p>

    <p>
      You've actually already got one of these tools built into the project called prettier.
      Prettier is what's used when you run <code>npm run format</code>, but it can also be run in a
      mode where it simply reports the format changes that are needed. You can also run
      <a href="https://github.com/lackita/northofboston.farm/blob/main/package.json#L10"
        ><code>npm run lint</code></a
      > to report formatting problems without altering files.
    </p>

    <p>
      One thing to keep in mind as you use these tools is they sometimes recommend things you don't
      want to do. Instead of treating failures of these tools as hard and fast rules, try to
      understand the intent behind the rule and disable it if you conclude it's not valuable. For
      example, it's popular for these tools to insist on a comment above every function; I've found
      unit tests on functions serve as more effective documentation, as they never get out of date,
      so I turn that rule off.
    </p>
  </section>

  <section>
    <h2>Continuous Integration</h2>

    <p>
      With a large set of automated tools to verify the system, it's important that they're
      frequently run and any failures are quickly corrected. For the main branch many people on a
      team are sharing, it's typically assumed that it's always fully passing.
    </p>

    <p>
      This is achieved through tools that automatically execute code whenever specific events occur.
      These tools can do a lot of things, but what's relevant for this conversation is that they can
      be configured to execute all of the tests when a new piece of code is pushed to GitHub.
      Passing this execution is then made a requirement for getting Pull Requests accepted.
    </p>

    <p>
      This is known as continuous integration or CI, which is a bit historical in nature. In larger
      organizations, there's sometimes large changes that are ongoing for weeks or months in a
      separate branch. When those changes are finally ready to merge into the main branch, it can be
      challenging to integrate the changes with that main code. The typical solution is to instead
      merge these changes directly into the main branch, thus integrating continuously. The tooling
      grew out of the need, when a new change was merged, to recompile the application to ensure it
      still built successfully. These days, recompilation and integration don't happen in the same
      way in practice, but we're still stuck with this historical terminology.
    </p>
  </section>

  <section>
    <h2>Manual Testing</h2>

    <p>
      With all of this automated testing, it's tempting to cut out manual testing altogether. This
      is almost certainly a mistake, though, as there's often issues that don't become obvious until
      you actually work with the system involved. You don't need to extensively walk through every
      possible scenario, but you should at least follow the happy path.
    </p>

    <p>
      If you find an issue during manual testing, though, that's a strong signal that you missed
      something in your tests. Rather than just go fix the problem, you should first work to
      replicate it through an automated test. This is the same process you should follow when
      solving a bug in the field, as in both cases you have direct evidence that a mistake like that
      is easy to make.
    </p>
  </section>

  <section>
    <h2>Front End Testing</h2>

    <p>
      Many people feel they need to test changes by walking through UI screens, in fact there's a
      lot of different tools out there to do just that. Sometimes this can be necessary, but often
      times it's more trouble than it's worth. We're interested in the core functionality of the
      system, not where a button appears on a page or if particular text is rendered.
    </p>

    <p>
      UI testing and designing a system to avoid such tests is a rather advanced topic, outside the
      scope of this course. Getting practice writing tests is important, though, so as we move into
      a domain where testing is necessary I'll begin adding libraries to lead you down the right
      path. How to use these will be described in the issues we select for the week, and if you're
      not sure how to test something you should reach out so we can work out a strategy.
    </p>
  </section>
</Lecture>
