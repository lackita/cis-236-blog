<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    Now it's time to get something up and running, and we're going to be deploying the site to <a
      href="https://vercel.com/">Vercel</a
    >. Your assignment is to create a Vercel project that hosts your fork of our project .
  </p>

  <p>
    Rather than search for a tutorial, I suggest you begin by actually creating an account and the actual Vercel
    project. There's some information on deploying here in the <a href="https://kit.svelte.dev/docs/adapter-vercel">
      SvelteKit documentation
    </a>
    explaining how to do this and a
    <a href="https://vercel.com/solutions/svelte">tutorial written by Vercel</a>
    that ends in deploying it, but both of these make something simple sound more complicated.
  </p>

  <p>
    When I've created a project in the past with them, they gave me the option to import the repo for my SvelteKit
    project and then it immediately started working. If your experience ends up being more difficult than that, know
    that something is going wrong and reach out to me for assistance. Under no circumstances should you have to offer
    payment information of any kind, if you encounter anything asking for that information take a screenshot and send it
    to me so I can figure out a different approach.
  </p>

  <p>
    For this week, any changes you push to your fork will immediately get deployed to the site, but teams typically have
    some form of barrier between their changes and what's deployed to production. The Pull Requests you've been creating
    to submit your assignments each week is actually a process teams commonly engage in called Code Review. My reviews
    are probably going to be more thorough than you'd typically encounter, but it's a common practice to have another
    team member look over your work before incorporating it into the central codebase.
  </p>

  <p>
    When you submit your code changes for this iteration, you should include in the Pull Request the URL of the deployed
    site. Then, after we've merged changes, I'll have you transfer ownership of the Vercel project to me so future
    changes follow this code review process before becoming live.
  </p>
</Assignment>
