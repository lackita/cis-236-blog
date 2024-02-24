<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    Now that you have a better understanding of how to make a site more accessible, you'll be improving the structure of
    the site to include <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">semantic elements</a>.
    Think of this as annotating your HTML to provide structure to reflect information you are already communicating
    visually.
  </p>

  <p>
    If you need some inspiration on improvements you can make, I had to do a similar exercise for this course site. Not
    all of my changes would be applicable to the site we're building for North of Boston, but you can find those changes
    at <a href="https://github.com/lackita/cis-236-blog/commit/fa037fef126ca965d383ed20d5a96e63997b47f2">this commit</a
    >.
  </p>
</Assignment>
