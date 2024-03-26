<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    Next week is Demo Day! We will be interacting with the client to show them our progress, and
    this will also serve as the midterm for the class.
  </p>

  <p>
    A demo can serve many purposes, but in this case it's primarily to gather feedback. While it's
    true that we're providing a live site that they could visit at any moment, they're busy people
    and might not have had an opportunity to do that.
  </p>

  <p>
    Much like the planning session or talking to users, the conversation should be focused on asking
    questions and understanding the problems they're trying to solve. It's very likely they'll ask
    for specific things, and it's your job to understand why they're asking for them.
  </p>

  <section>
    <h2>Prototyping</h2>

    <p>
      One change we know is needed is the button color. With their existing site, they feel the
      green comes out of nowhere, but at the same time we don't have very concrete guidance on what
      they should look like. This is completely fine and very common when working with clients, and
      we can help them express that more fully by giving them examples of what it could look like.
    </p>

    <p>
      Prototypes are cheap and dirty mock ups of various ways that something could be built. The
      goal is to provide several different versions to serve as a visual aid to give them the
      context they need to describe what they actually want.
    </p>

    <p>
      The important thing to keep in mind is this is a tool for communication. It's extremely likely
      that none of the choices you put together will match what they want, and that's completely
      fine, if they're able to more fully express what they actually wanted then they'll have served
      their purpose.
    </p>
  </section>
</Lecture>
