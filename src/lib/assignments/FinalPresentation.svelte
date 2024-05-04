<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    It's time for your final presentation! You've worked hard over the semester, and this is your
    chance to show off what you've made. Unlike previous presentations, which were focused on
    feedback, this is all about putting your best foot forward. Throughout your career, you're going
    to have presentations where this is the priority, and my advice is to have contingency plans to
    ensure it goes smoothly.
  </p>

  <p>
    I want you to show placing an order with multiple items and show that order after it was placed.
    If you've run into issues anywhere in this process in the past, think about what you can do to
    smooth over the problem and move the presentation along. For example, what would you do if
    something went wrong while placing the order? Maybe you have some SQL you can quickly run to
    create an order so you can still show what it looks like in the order history.
  </p>

  <p>
    Often times, these contingency plans will be completely unnecessary, that's actually what you're
    hoping for. The purpose of those plans is to ensure that the presentation remains focused on
    what you're trying to communicate. When things go wrong, it's extremely easy to allow the entire
    presentation to become centered around that problem, and most of the time it has little to do
    with what you're presenting.
  </p>
</Assignment>
