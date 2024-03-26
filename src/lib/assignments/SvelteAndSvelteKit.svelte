<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    We're finally ready to start building a website! Your first task is to go through all four parts
    of the <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Svelte Tutorial</a>.
    There's a lot of cool stuff there, I hope you have fun trying out some of the things you can do
    with the framework. If you're interested in seeing a SvelteKit project in action, I used it to
    build the site you're on right now and you can view the source code
    <a href="https://github.com/lackita/cis-236-blog">here</a>.
  </p>

  <p>
    Alongside your first feature, you will need to <a
      href="https://kit.svelte.dev/docs/creating-a-project">create the actual SvelteKit project</a
    >. These files need to be included along with the changes for the story you're working on in
    this iteration.
  </p>

  <p>
    All of the stories you created in last weeks assignment have been converted into issues (not a
    great name, but that's what GitHub gives us). Now that we're actually implementing stories, you
    can see the specific stories for the week in the <a
      href="https://github.com/users/lackita/projects/2/views/3">Current Iteration Tab</a
    > of our plan. When you get started working on a story, you should move it to the "In Progress" tab
    and when you submit the PR it can be moved to "Done".
  </p>
</Assignment>
