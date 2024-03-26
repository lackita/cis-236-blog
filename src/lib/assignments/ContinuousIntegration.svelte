<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    As covered in the lesson, continuous integration in our case will take the form of various forms
    of validation passing in order for a change to be allowed to merge into the main repository. You
    will be setting this up using <a href="https://docs.github.com/en/actions">GitHub Actions</a>.
  </p>

  <p>
    You will need to execute three different jobs any time a <a
      href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request"
      >pull_request event occurs</a
    >:
  </p>

  <ul>
    <li>Run vitest through the already available <code>npm run test</code></li>
    <li>Check formatting through the already avialable <code>npm run lint</code></li>
    <li>ESLint, which will be described in more detail below</li>
  </ul>

  <p>
    Your fork of the repo should be able to run these workflows on demand. Because the trigger will
    be a pull_request, they won't happen by default, but if you also include the trigger <a
      href="https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch"
      >worflow_dispatch</a
    > this should be possible for testing before you submit the pull request.
  </p>

  <section>
    <h2>ESLint</h2>

    <p>
      As mentioned above, you will be adding <a href="https://eslint.org/">ESLint</a> to the project
      to identify additional problems. If you're struggling to figure out how to incorporate it into
      the existing project, the command to create a SvelteKit project provides it as an option, you can
      create a sandbox app and see what files it creates and/or modifies.
    </p>

    <p>
      When you first run ESLint, it's extremely likely that it will have a laundry list of issues
      that need to be resolved. Part of your assignnment is to work through each of these and
      resolve them, either by fixing the issue or disabling the warning. You should include in the
      pull request description any warnings you chose to ignore with an explanation of why you made
      that decision.
    </p>
  </section>
</Assignment>
