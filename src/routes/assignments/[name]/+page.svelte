<script lang="ts">
  import { assignment } from "$lib/lessons.js";

  export let data: { name: string };
  console.warn(data.name);
  const Page = assignment(data.name).component;
</script>

<Page />
