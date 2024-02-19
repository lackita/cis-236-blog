<script lang="ts">
  import type { Lecture } from "$lib/lessons";

  export let lecture: Lecture;
</script>

<article>
  <h1>{lecture.title}</h1>

  <slot />
</article>
