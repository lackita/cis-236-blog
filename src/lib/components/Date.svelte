<script lang="ts">
  import { onMount } from "svelte";

  export let value: Date;

  let language: string | undefined = undefined;
  onMount(() => language = navigator.language);
</script>

<time>
  {value.toLocaleDateString(language, {
    weekday: "short",
    month: "short",
    day: "numeric",
  })}
</time>
