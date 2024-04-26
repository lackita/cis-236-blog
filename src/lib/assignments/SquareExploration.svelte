<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    We won't have time to implement API interaction as part of this class, but I still think it's
    beneficial for you to play around with the API. To complete this assignment, you'll need to
    create a <a href="https://developer.squareup.com/us/en">Square Developer</a> account. You'll also
    need to create an application and set it up for inventory management.
  </p>

  <p>
    Your assignment will be to use the <a
      href="https://developer.squareup.com/docs/inventory-api/what-it-does">Inventory API</a
    >
    to determine available quantities of an item and adjust those quantities. You'll start with no items
    in the catalog, though, so you'll also have to create items within the catalog using the
    <a href="https://developer.squareup.com/docs/catalog-api/what-it-does">Catalog API</a>.
  </p>

  <p>
    As you try to puzzle out how to make these API calls, keep in mind that this is a fairly
    positive API experience; they provide a sandbox for you to interact with and extensive
    documentation of the calls. That being said, don't get discouraged if things aren't immediately
    obvious, Square is a big company and their API is quite sprawling as a result. Additionally,
    they're trying to model some complex situations, and sometimes the calls representing this
    concept can get fairly complicated.
  </p>

  <p>
    To submit this assignment, add a file to the docs folder describing your experience. Make sure
    it answers the following questions:
  </p>

  <ul>
    <li>What was the most difficult part of interacting with these APIs?</li>
    <li>What did you find surprising?</li>
    <li>If you were to implement code to interact with the API, where would you start?</li>
  </ul>
</Assignment>
