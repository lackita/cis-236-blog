<script lang="ts">
  import { calendar } from "$lib/lessons";
  import { onMount } from "svelte";

  let language: string;
  onMount(() => (language = navigator.language));
  function format_date(date: Date): string {
    return date.toLocaleDateString(language, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }
</script>

<h1>Calendar</h1>

<p>
  Every class will have an article covering the same concepts that will be
  discussed when we meet. They will be posted the day before the class on that
  subject, giving you time to review the material if you wish.
</p>

<p>
  At the end of each class, you will receive an assignment that will be due by
  the start of the following class. We may have several rounds of feedback on
  the assignment, all feedback is expected to be resolved and the associated
  pull request merged by the Friday following the due date.
</p>

<table>
  <tr>
    <th>Lecture Date</th>
    <th>Topic</th>
    <th>Assignment</th>
    <th>Due Date</th>
    <th>Final Revision</th>
  </tr>

  {#each calendar as { lecture, assignment }}
    <tr>
      <td>
        {format_date(lecture.date)}
        {#if lecture.end}
          to {format_date(lecture.end)}
        {/if}
      </td>
      <td>
        {#if lecture.path_name}
          <a href="/lectures/{lecture.path_name}">{lecture.title}</a>
        {:else}
          {lecture.title}
        {/if}
      </td>
      {#if assignment}
        <td>
          {#if assignment.path_name}
            <a href="/assignments/{assignment.path_name}">{assignment.title}</a>
          {:else}
            {assignment.title}
          {/if}
        </td>
        <td>{format_date(assignment.due)}</td>
        <td>
          {assignment.revisions
            ? format_date(assignment.revisions)
            : "No Revisions"}
        </td>
      {/if}
    </tr>
  {/each}
</table>

<style>
  table {
    width: 100%;
  }
</style>
