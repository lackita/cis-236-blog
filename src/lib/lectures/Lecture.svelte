<script lang="ts">
  import type { Lecture } from "$lib/lessons";

  export let lecture: Lecture;
  console.warn(lecture);
</script>

<h1>{lecture.title}</h1>

<slot />
