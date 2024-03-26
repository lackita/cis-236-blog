<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    As mentioned last lesson, this demo is all about getting feedback from the client. The earlier
    in the development process we can learn that something is amiss, the easier it will be to change
    course and address the problem. Gathering constant feedback and responding accordingly is one of
    the core values of the Agile process, building software is a dynamic process and things will
    always come up you had no chance of predicting.
  </p>

  <section>
    <h2>Schedule</h2>

    <p>
      To give you a reasonable idea of what to expect, and to make sure we stay on track and cover
      everything needed in the limited time available, I've created an agenda for the hour:
    </p>

    <ol>
      <li><time>2:00-2:05</time>: Greetings</li>
      <li><time>2:05-2:15</time>: Demo</li>
      <li><time>2:15-2:20</time>: Button alternatives</li>
      <li><time>2:20-2:40</time>: Interactive design of button</li>
      <li><time>2:40-3:00</time>: Client feedback</li>
    </ol>
  </section>

  <section>
    <h2>Demo</h2>

    <p>
      Think of this demo as an informal tour of what you've put together so far. You should make it
      clear throught the presentation that this is just what we have so far. Anything about the site
      can change, the purpose of this meeting is for us to understand if we're heading in the right
      direction.
    </p>

    <p>
      You should consider the demo as the starting point for a conversation. This isn't a big formal
      presentation and everybody is clear that this is a work in progress.
    </p>
  </section>

  <section>
    <h3>Button</h3>

    <p>
      Much like the demo, the alternatives for the button you prepared is a starting point. You
      prepared these so that the client has a frame of reference in discussing what they want. They
      can and probably will pick out aspects of each button they like, and that's exactly what we're
      hoping to achieve.
    </p>

    <p>
      The interactive session we discussed in class can be a little daunting, especially if you've
      never done so before. Here are some ideas of ways you can prepare if you're feeling nervous:
    </p>

    <ul>
      <li>Find or create a quick reference of CSS attributes you might be asked to change</li>
      <li>
        Practice making changes on the fly, you can use dice or ChatGPT to give you random
        suggestions
      </li>
      <li>Ask a friend to play the role of the client and practice with them</li>
    </ul>
  </section>

  <section>
    <h2>Feedback</h2>

    <p>
      We've covered this multiple times in the course, but your goal when receiving feedback should
      be to fully understand what they're trying to explain to you. Here's what to keep in mind as
      they're providing feedback:
    </p>

    <ul>
      <li>
        When the client says something, make sure to repeat back your understanding and verify it's
        accurate
      </li>
      <li>If something is said you don't understand, ask a followup question to clarify</li>
      <li>
        Rather than suggest solutions to problems, ask questions about how they would deal with
        those issues
      </li>
    </ul>

    <p>
      Your primary focus should be fully understanding what they are trying to express. The better
      you understand, the easier it will be to make decisions they will ultimately be happy with. If
      you understand what they're saying, a secondary goal is to collaboratively discover edge cases
      to better understand how to resolve them.
    </p>
  </section>
</Lecture>
