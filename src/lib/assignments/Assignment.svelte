<script lang="ts">
  import Date from "$lib/components/Date.svelte";
  import type { Assignment } from "$lib/lessons";

  export let assignment: Assignment;
</script>

<article>
  <h1>{assignment.title}</h1>
  <p>Due Date: <Date value={assignment.due} /></p>
  {#if assignment.revisions}
    <p>Revisions Due: <Date value={assignment.revisions} /></p>
  {/if}

  <slot />
</article>
