<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    This week, your assignment is to be able to add multiple items to the cart and show all of them
    in the order history. In addition to serializing what's stored in <code>localStorage</code>, you
    will also need to figure out how to submit multiple items in a form and migrate the database to
    a new schema.
  </p>

  <p>
    Migrating data can be a delicate operation, it's all too easy to accidentally erase information
    you can never get back. Most companies have backups for this reason, but I'd also contend that
    most companies don't even know how to use those backups.
  </p>

  <p>
    Therefore, typically people change the data in one release and then remove the old version of
    the data in a subsequent release. Some people never do that last cleanup step, but old columns
    can be a source of confusion when newcomers are exploring the schema. So this week you'll be
    creating the new table you need and populating it with the information from the orders already
    placed. Next week you can then remove the column in the existing table.
  </p>
</Assignment>
