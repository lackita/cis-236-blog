<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";
  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    Your assignment this week is to generate three different prototypes for how the mailing list
    button should look. There are a lot of different ways to build a prototype, but because this is
    a course on web development we will be building ours directly in HTML and CSS.
  </p>

  <p>
    Because the site is not yet live, you can use what's deployed as the prototype. You should use a
    GET parameter to control which version is used. So, for example, if I went to <code
      >https://northofboston-farm-pi.vercel.app/?prototype=2</code
    >, I would see the button rendered using the second of the three prototypes you built.
  </p>

  <p>
    We don't have a lot of guidance on what the button should look like, but one thing I've learned
    is that they want their colors to be black and white with red accents. All versions of the
    button should follow that guideline, but there's a lot of different variations to consider
    within those constraints:
  </p>

  <ul>
    <li>Button size</li>
    <li>Rounded corners</li>
    <li>Border</li>
    <li>Padding</li>
    <li>Hover</li>
  </ul>

  <p>
    The prototypes should provide enough variety as possible across them with these attributes. For
    example, for a border you could have versions with no border, a think border and a thick border.
    This is even possible within our color constraints, as different arrangements can be chosen for
    text, background and border colors.
  </p>

  <p>
    When presenting these prototypes, you should plan to be able to make adjustments on the fly to
    quickly iterate towards something that matches the clients expectations more closely. This will
    take a bit of practice, but being able to see the impact of various tweaks in real time will
    allow us to arrive at a good design much more quickly.
  </p>

  <p>
    Unlike our usual assignments, because it will be presented during the demo, you will not have
    additional time to make revisions. I can still offer feedback if you get your changes in early,
    just know the class date is a stricter deadline.
  </p>
</Assignment>
