<script lang="ts">
  import { assignment } from "$lib/lessons.js";

  export let data: { name: string };
  const Page = assignment(data.name).component;
</script>

<Page />
