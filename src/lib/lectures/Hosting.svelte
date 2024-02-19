<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    With a web server running locally, we need to have a place to host it. In the old days, getting even the smallest
    site online involved a monthly fee, but these days it's easy to find free hosting for just about any small project.
    Their hope is that, as your site grows, you'll choose to stick with them since you already have everything set up to
    work on their platform.
  </p>

  <p>
    Different kinds of projects will call for different levels of hosting, though, and the goal of this class is to
    better understand the various options and how to navigate them. You will learn the hosting we will be using when
    this weeks assignment is posted, but you should be thinking about which one you would choose until it is.
  </p>

  <section>
    <h2>Static Content</h2>

    <p>
      The simplest sites are ones with no dynamic content, commonly referred to as static. The primary attribute of
      sites such as these is that you don't need any special backend logic in order to provide the functionality. Think
      of blogs, businesses homepages, reference information, that sort of thing, anything where all of the pages that
      could possibly be rendered could be generated ahead of time.
    </p>

    <p>
      There are a lot of options out there, but an especially popular one is
      <a href="https://pages.github.com/">GitHub Pages</a>. This allows you to host your static website at zero cost,
      moreover the bandwidth limitations are generous enough that they don't provide practical limitations unless your
      site is wildly successful.
    </p>
  </section>

  <section>
    <h2>Dynamic Front End Sites</h2>

    <p>
      A more recent trend has led to services allowing websites to be hosted with no dedicated backend server. Instead,
      all of the dynamic functionality is served by third party services, allowing deployment to static hosting
      providers while providing richer functionality.
    </p>

    <p>
      This is a new enough concept that I wasn't able to find a term for it. For an example of this, I believe <a
        href="https://firepoker.app/">Firepoker</a
      >
      where we did our estimations last class uses this approach. It's named after
      <a href="https://firebase.google.com/">Firebase</a>, which offers a number of services supporting this style of
      website.
    </p>

    <p>
      There is certainly some appeal to the flexibility in hosting this option provides, but bear in mind it also
      provides a lot more information to malicious users. Instead of endpoints focused on just the functionality you
      provide, this forces you to share everything about how your site works. Although there are security controls you
      can put in place with these systems, it gives them the ability to cause a lot more damage if there's a hole in
      that security.
    </p>
  </section>

  <section>
    <h2>Platform as a Service</h2>

    <p>
      When you're using a fairly popular software stack, it's relatively simple to provide a more curated experience for
      it. This is the same functionality over flexibility tradeoff we discussed with Rails. Because it can make
      assumptions about your system, you're able to get a site up and running much more easily. On the other hand, if
      you need to do something novel it may not have the flexibility you need.
    </p>

    <p>
      Since it follows the same tradeoff as MVC architectures, they rose to popularity around the same time. The first
      big name is probably
      <a href="https://www.heroku.com/">Heroku</a>, which made it dead simple to deploy a Rails app. Since then, other
      major players such as
      <a href="https://vercel.com/">Vercel</a> have also emerged, but the offerings among them are extremely similar.
    </p>
  </section>

  <section>
    <h2>Cloud Platforms</h2>

    <p>
      If your product has special requirements, you may need to turn to full scale cloud platforms such as <a
        href="https://aws.amazon.com/">AWS</a
      >,
      <a href="https://console.cloud.google.com/">GCP</a>
      or <a href="https://azure.microsoft.com/en-us">Azure</a>. These companies provide large suites of services
      allowing you to build using any combination of technologies necessary. In addition to being able to deploy virtual
      machines that are always running, they also provide the ability to set up different hosting and storage options
      that can scale much more efficiently.
    </p>

    <p>
      These platforms are more difficult to set up, but they provide attractive tradeoffs when a site reaches a
      particular scale. On the other hand, although they have a fairly generous free tier these days, for a simple site
      that's not serving too much traffic you could easily find yourself in a situation costing you hundreds of dollars
      a month.
    </p>

    <p>
      Another problem with these platforms is that what you have set up can get quite sprawling. It's easy to lose track
      of something you provisioned months ago, and that could come back to bite you later on when trying to diagnose an
      issue. If it's expensive, you'll typically notice it on your bill and quickly track it down, but it's not uncommon
      to get charged a couple dollars for something you accidentally set up or forgot about. Tools like
      <a href="https://www.terraform.io/">Terraform</a> are making that easier, but there are still a lot of rough edges
      when you're working this low level.
    </p>
  </section>

  <section>
    <h2>Physical Data Centers</h2>

    <p>
      Some businesses still build their own data centers, but making this decision is becoming less and less common.
      There is a certain economy of scale in operating a data center that large companies such as Amazon, Microsoft and
      Google can achieve, one that all but the largest companies have difficulty realizing. As a result, it is extremely
      rare these days for a business to decide to build a new data center rather than hosting on on a Cloud Platform.
    </p>

    <p>
      The main reason people make the decison today is because of strict regulations their company is under. A decade
      ago, this was why large health systems eschewed Cloud Infrastructure, but these situations are becoming less and
      less common. Perhaps defense contractors still fall into this category, but I'm struggling to think of a second
      example that would truly require a physical data center.
    </p>
  </section>
</Lecture>
