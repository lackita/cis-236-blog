<script lang="ts">
  import type { Material } from "$lib/lessons";

  export let prefix: string;
  export let material: Material;
</script>

{#if material.path_name}
  <a href="/{prefix}/{material.path_name}">{material.title}</a>
{:else}
  {material.title}
{/if}
