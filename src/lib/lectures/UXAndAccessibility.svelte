<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    Because the client wants accessibility to be a priority, we're going to cover the topic a little earlier than we
    normally would. I consider accessibility to be part of a larger subject, though, known as <a
      href="https://en.wikipedia.org/wiki/User_experience">User Experience or UX</a
    >. Keep in mind that these are both deep topics, we could probably have an entire course dedicated to either of
    them, so this lesson is only going to cover some of the basics.
  </p>

  <section>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/df/UX_Honeycomb.png"
      alt="Honeycomb model of UX: Useful, Usable, Desirable, Valuable, Findable, Accessible and Credible"
    />

    <h2>User Experience</h2>

    <p>
      User experience is an evolving and broad field, serving as an umbrella term for <a
        href="https://www.usability.gov/what-and-why/user-experience.html">several different disciplines</a
      >. At it's core, think of it as those domains of web development centered on improving the impression the user has
      when visiting the site.
    </p>

    <p>
      One way to think about the areas covered is the <a href="http://semanticstudios.com/user_experience_design/"
        >Honeycomb model</a
      >, which breaks down the domains involved. We don't have time to delve into each of these categories individually,
      but if you're looking for a deeper dive on this subject you can use this model to focus on individual areas.
    </p>

    <section>
      <h3>User Conversations</h3>

      <p>
        One of the primary tools in identifying UX needs for a site is user conversations. The conversation should look
        very similar to the one we had with the customer, but in this case you would be speaking with somebody
        interacting with the site instead of the primary stakeholder for the project.
      </p>

      <p>
        The key concept to understand is not to present the user with your own ideas, you should focus on asking
        questions and clarifying your understanding of what they're telling you. In general, you can follow these steps:
      </p>

      <ol>
        <li>Ask an open-ended question about an area you want to learn more about.</li>
        <li>When they pause, repeat back your understanding of what they just said.</li>
        <li>If you don't understand something, ask if they could provide more information.</li>
      </ol>

      <p>
        There are a lot of great videos on YouTube covering this topic. <a
          href="https://youtu.be/MT4Ig2uqjTc?si=VA3PAYm5_68JgzRI">This one</a
        > covers this concept in a lot more detail and is pretty good, but any by "Startup School" or "Y Combinator" are
        pretty high quality. Because startups gain traction when the functionality isn't quite there and have to rely on
        a strong positive impression to keep momentum, advice for those companies is heavily centered on UX.
      </p>

      <p>
        After speaking to several users, you'll start building up an understanding of the different kinds of users who
        use a system. You'll start identifying patterns and it can be helpful to summarize these patterns so they can be
        easily referenced later on. One way to accomplish this is to create fictional characters called <a
          href="https://qubstudio.com/blog/4-examples-of-ux-personas/">Personas</a
        >, which tell a story about how they use the system.
      </p>
    </section>

    <section>
      <h3>Testing Assumptions</h3>

      <p>
        User conversations and personas are great in identifying possible ways to improve the system, but it's easy to
        make assumptions that don't play out in practice. There are a number of techniques you can apply to verify that
        the changes you make have the intended effect.
      </p>

      <p>
        One tool in this arsenal is A/B testing. Simply put, you split your sites traffic in half, presenting each group
        a slightly different version and then measure the impact the difference has on some sort of goal. For example,
        during a presidential debate a candidates fundraising site could split traffic between a photo of the candidate
        and their opponent, measuring which one leads to more people clicking on the donation link.
      </p>

      <p>
        If A/B testing isn't possible for some reason, you can still identify some metric and observe if it improves
        after a change is released. We'll cover these ideas in more depth when we get to monitoring later in the
        semester, but the key idea is that you need to verify that the change you're making is actually creating the
        intended effect.
      </p>

      <p>
        Although their practices can get rather unethical, Facebook is famouse for using these techniques to foster
        growth. I recommend <a href="https://www.youtube.com/watch?v=kl5ijJW50JU">this interview with Mark Zuckerberg</a
        > if you want to learn more about how they approach growth. At all but the largest companies, having a dedicated
        growth team is probably a poor investment, but that doesn't mean that these ideas can't be applied at a smaller scale
        to ensure your changes are effective.
      </p>
    </section>
  </section>

  <section>
    <h2>Accessibility</h2>

    <p>
      Given the clients strong interest in accessibility, this is one hexagon of the honeycomb we're going to focus on
      in more depth. When focusing on accessibility, it's important to keep in mind that disabilities can take many
      forms. Because categorizing disabilities into various limitations will likely exclude some group, instead this
      section will focus on pragmatic practices and how they can benefit different populations.
    </p>

    <p>
      If you want to dive deeper on the topic, <a
        href="https://cleancoders.com/blog/2023-11-28-no-user-left-behind-making-ux-more-accessible">this article</a
      >
      is a good developer-centric primer. After that, you might consider going through the
      <a href="https://www.w3.org/WAI/curricula/developer-modules/">course modules the W3C</a>
      put together on the subject. For reference, the W3C also put together
      <a href="https://www.w3.org/TR/WCAG22/"> a set of guidelines</a>, but these standards can be very dry reading.
    </p>

    <section>
      <h3>Page Structure</h3>

      <p>
        The foundation of an accessible site is well organized HTML. You can throw in all the <code>alt</code> and
        <code>aria-</code>
        attributes you want, but none of that will be as powerful as a simple organization that mirrors the actual structure
        of the content. Peppering your page with <code>div</code>s and <code>span</code>s to provide hooks for styling
        is tempting, but any time you end up communicating a concept through CSS you exclude people who can't see that
        styling.
      </p>

      <p>
        Of course, what do you use to structure the page if you want to minimize <code>div</code>s? HTML5 introduced a
        number of <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">Semantic Elements</a> to serve
        this purpose. When one of these applies to the content you're trying to encapsulate, they are a very good choice
        to use instead. That's not to say that you'll never find yourself needing a <code>div</code>, but very often you
        can replace it with something that has more meaning like <code>nav</code> or <code>header</code>.
      </p>
    </section>

    <section>
      <h3>Annotations</h3>

      <p>
        Sometimes you need a visual aid to effectively convey something to people who can see, or you need to build
        something that doesn't have a semantic tag. In these cases, there are special attributes you can use to annotate
        the element.
      </p>

      <p>
        Images are the classic example, there's no way that somebody visually impaired will be able to benefit from the
        information delivered by it. In these cases, you can use an <code>alt</code> attribute to provide a description of
        what you're attempting to communicate. Tailor this content to what you're attempting to accomplish, more isn't necessarily
        better, think about the impact you're trying to achieve for sighted users and limit it to that.
      </p>

      <p>
        When you do need to use a <code>div</code> for some reason, try to come up with an
        <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA">Aria Role</a> to describe the concept.
        As noted on the site, very often these days there's a semantic element to achieve the same purpose, but Aria attributes
        can provide important clues to communicating your intent.
      </p>
    </section>

    <section>
      <h3>Other Limitations</h3>

      <p>
        A lot of the material I've covered has been geared towards the assumption that the user is visually impaired.
        But as I mentioned above, your considerations should extend to other limitations as well.
      </p>

      <p>
        Consider somebody who has difficulty using a mouse. To work around this problem, they would use keyboard
        controls to move around a page, but this only works if things like tab work as expected. This doesn't mean you
        have to create a bunch of custom keybindings, just keep your HTML structured in a rational way. Semantic tags
        and ordering your elements in the order you want them to read will go a long way towards achieving this in
        modern browsers.
      </p>

      <p>
        Also keep in mind that just because somebody has visual limitations doesn't mean they'll be using a screen
        reader. For example, somebody who is color blind can use most websites without a problem, but would struggle if
        color was conveying something important. Even if you have hooks in place for screen readers to tell the
        difference, they'd be unable to benefit from that.
      </p>
    </section>

    <section>
      <h3>Testing</h3>

      <p>
        You can use tools to simulate the experience these users will have on your site. There's no better way to
        identify accessibility issues than experiencing the same thing they do.
      </p>

      <p>
        For example, you can use a screen reader to browse the pages and get a pretty good idea of where it's difficult
        to interact in that way. There are browser plugins that exist that simulate different kinds of color blindness.
        What about navigating through the site without using a mouse? Put yourself in their place and see what's
        difficult.
      </p>
    </section>

    <section>
      <h3>Course Improvements</h3>

      <p>
        As part of preparing for this lesson, I went through this site and addressed some accessibility issues. The
        biggest one I discovered was an underuse of semantic elements to structure my articles, I wasn't using <code
          >article</code
        >
        or <code>section</code> tags to break down their structure. You can see all of my changes in
        <a href="https://github.com/lackita/cis-236-blog/commit/fa037fef126ca965d383ed20d5a96e63997b47f2">this commit</a
        >.
      </p>

      <p>
        Of particular note is my introduction of the <a
          href="https://github.com/lackita/cis-236-blog/blob/main/src/lib/components/Date.svelte"
          ><code>Date</code> component</a
        >. One of the things I learned while reviewing my semantic elements was that dates should be wrapped in a
        <code>time</code>
        tag, and coupling that with the logic to convert the <code>Date</code> object into a string meant a lot of repetition
        in the codebase. So I captured that concept into a component that I can use reuse.
      </p>

      <p>
        This notion of reuse is an important concept in programming, one that will allow you to keep things organized as
        complexity grows. Whenever you find yourself doing the same thing over and over, it's worth taking time to
        figure out how to eliminate that duplication. A useful acronym to keep in mind is DRY for Don't Repeat Yourself,
        it's not uncommon to hear people talk about how code isn't very DRY or how they're DRYing out the code.
      </p>
    </section>
  </section>
</Lecture>

<style>
  img {
    max-width: 100%;
    width: 15em;
    float: right;
  }
</style>
