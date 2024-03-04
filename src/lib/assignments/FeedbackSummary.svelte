<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    This weeks assignment is comprised of two deliverables: feedback changes and button revisions. Unlike our usual
    assignments, this one is due before spring break begins at the end of the week.
  </p>

  <p>
    After meeting with the client, you need to reflect on what you've learned from the conversation. More specifically,
    what you can do differently going forward in response. This may not be a big thing, but you should write up at least
    on thing you'll do differently going forward after the conversation.
  </p>

  <p>
    Now that we've discussed with the client various options, you should apply those decisions to the site. When the
    Agile Manifesto talks about "Working software over comprehensive documentation," this is what they mean. Rather than
    write up what was discussed, we'll capture the outcome of the conversation immediately in working code. Furthermore,
    the exercise of interactively identifying the right design for the button is a great example of "Customer
    collaboration over contract negotiation," rather than get a specific list of requirements we worked with the client
    to more quickly and effectively identify the best solution.
  </p>
</Assignment>
