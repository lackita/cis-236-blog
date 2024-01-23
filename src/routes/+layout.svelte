<script lang="ts">
  import Icon from "@iconify/svelte";
  import "./styles.css";
</script>

<div class="content">
  <nav>
    <a href="/home">Home</a>
    <a
      href="https://docs.google.com/document/d/1JfdKFSfW3PTs8Vi7Rxm4vrz6hr4II4jjGw8VHISr2h8/edit?usp=sharing"
      target="_blank"
    >
      Syllabus
    </a>
    <a href="/lectures">All Lectures</a>
    <a href="/lectures/upcoming">Upcoming Lecture</a>
  </nav>

  <main>
    <slot />
  </main>

  <footer>
    <a href="mailto:colin@colinwilliams.name"
      ><Icon
        icon="mdi:email-outline"
        height="1.5em"
        style="color: black"
      />colin@colinwilliams.name</a
    >
    <a
      href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
      target="_blank"
      rel="license noopener noreferrer"
    >
      <img
        alt="Creative Commons"
        src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
      />
    </a>
  </footer>
</div>

<style>
  .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  nav,
  footer {
    display: flex;
    flex-direction: row;
    gap: 2em;
    align-items: center;
  }

  nav {
    justify-content: space-evenly;
    background-color: black;
    padding: 0.5em;
  }

  nav a {
    color: white;
  }

  main {
    padding: 1em;
  }

  footer {
    justify-content: space-between;
    background-color: grey;
    margin-top: auto;
    font-size: smaller;
    padding: 0.5em;
  }

  footer a {
    display: flex;
  }
</style>
