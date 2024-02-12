<script lang="ts">
  import { lecture } from "$lib/lessons.js";

  export let data: { name: string };
  const lect = lecture(data.name);
  const Page = lect.component;
</script>

<Page lecture={lect} />
