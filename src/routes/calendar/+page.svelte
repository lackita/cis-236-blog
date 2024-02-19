<script lang="ts">
  import Date from "$lib/components/Date.svelte";
  import { calendar } from "$lib/lessons";
  import Title from "./Title.svelte";
</script>

<h1>Calendar</h1>

<p>
  Every class will have an article covering the same concepts that will be discussed when we meet. They will be posted
  the day before the class on that subject, giving you time to review the material if you wish.
</p>

<p>
  At the end of each class, you will receive an assignment that will be due by the start of the following class. We may
  have several rounds of feedback on the assignment, all feedback is expected to be resolved and the associated pull
  request merged by the Friday following the due date.
</p>

<table>
  <thead>
    <tr>
      <th>Lecture Date</th>
      <th>Topic</th>
      <th>Assignment</th>
      <th>Due Date</th>
      <th>Final Revision</th>
    </tr>
  </thead>

  <tbody>
    {#each calendar as { lecture, assignment }}
      <tr>
        <td>
          <Date value={lecture.date} />
          {#if lecture.end}
            to <Date value={lecture.end} />
          {/if}
        </td>
        <td>
          <Title prefix="lectures" material={lecture} />
        </td>
        {#if assignment}
          <td>
            <Title prefix="assignments" material={assignment} />
          </td>
          <td><Date value={assignment.due} /></td>
          <td>
            {#if assignment.revisions}
              <Date value={assignment.revisions} />
            {:else}
              No Revisions
            {/if}
          </td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
  }

  table th {
    background-color: #e6e6e6;
  }
</style>
