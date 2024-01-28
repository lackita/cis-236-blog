<script lang="ts">
  import { lecture } from "$lib/lessons.js";

  export let data: { name: string };
  const Page = lecture(data.name).component;
</script>

<Page />
