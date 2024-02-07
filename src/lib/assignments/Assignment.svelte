<script lang="ts">
  import { format_date } from "$lib/date";
  import type { Assignment } from "$lib/lessons";

  export let assignment: Assignment;
</script>

<h1>{assignment.title}</h1>
<p>Due Date: {format_date(assignment.due)}</p>
{#if assignment.revisions}
  <p>Revisions Due: {format_date(assignment.revisions)}</p>
{/if}

<slot />
