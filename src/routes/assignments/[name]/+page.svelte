<script lang="ts">
  import { assignment } from "$lib/lessons.js";

  export let data: { name: string };
  const assign = assignment(data.name);
  const Page = assign.component;
</script>

<Page assignment={assign} />
