<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    For our final lesson, we'll be covering monitoring. This is one of those topics that seems like
    it should be simple, but there's a surprising amount of depth to do so effectively. You may be
    tempted to just watch everything you possibly can, but that approach quickly becomes
    overwhelming.
  </p>

  <section>
    <h2>Errors</h2>

    <p>
      When an error occurs, you typically want to know about it. This may seem obvious, but if you
      haven't been paying close attention to your errors you may be surprised how many are occurring
      when you turn this monitoring on. For example, check out the Logs tab on Vercel, you'll find
      that it has an error because <code>/favicon.png</code> is missing. Now open the javascript console
      in your browser, do you see any errors when you load pages on the site?
    </p>

    <p>
      Often times these errors can be benign, but you would need to investigate them to be sure.
      It's tempting if that's the case to ignore it, but that's a dangerous path. Once you become
      conditioned to expect that errors are noise, it becomes all too easy to treat new errors that
      arrive as noise as well. Eventually a serious problem will come in, and unless it creates a
      whole lot of errors you'll have no idea it's going on.
    </p>

    <p>
      Most teams fall into this pattern, so there's a strong chance you'll find yourself in this
      situation. If that's the case, I suggest you work hard to prevent your changes to add to this
      error volume, and if you're working in an area that has some errors, clean them up while
      you're there.
    </p>

    <p>
      I've heard this problem referred to as error fatigue, although I can't find an official
      definition of this term. It's a rather insidious problem, though, and you'll see echoes of it
      throughout most of the types of monitoring we're going to discuss.
    </p>
  </section>

  <section>
    <h2>Logging</h2>

    <p>
      If you look back at Vercel's log panel, it shows a few different fields for each of the items
      logged. As your application grows, though, you'll start identifying additional useful
      information. I'm not sure how extensive Vercel's offering is, but there are a lot of robust
      logging services out there that provide a more structured view.
    </p>

    <p>
      Let's take North of Boston as an example, one useful piece of information you may care about
      is the fact that an order was placed. Moreover, you may be interested in how many items were
      in the order and the total price. One way you could log this information is like this:
    </p>

    <code
      >{`
{
  "time": "2024-04-29T20:52:00",
  "name": "order",
  "items": 5,
  "price": 50
}
`}</code
    >

    <p>
      By placing the log into a serialized data structure, various logging systems can extract that
      information. I used JSON because you should be pretty familiar with it at this point, but
      there are a lot of other options here. For example, the system I use at work parses lines more
      efficiently when they're logged using the <a href="https://brandur.org/logfmt"
        >logfmt format</a
      >.
    </p>

    <p>
      With this log item, you have a lot of really powerful options. An obvious one would be to
      graph the number of orders over time, which you could observe while new changes are being
      released to gain confidence that orders are still working. You don't have to stop there,
      though, maybe you're also worried about people being charged correctly, then maybe you would
      observe the average price of orders.
    </p>

    <p>
      One technique I've had great success with is to construct a dashboard of several key
      visualizations, which I have open whenever a change is deployed. When an issue arises which I
      couldn't see on those dashboards, I think about what I could observe next time that would have
      told me about that problem.
    </p>

    <p>
      This is also a good way to conduct A/B testing, which we discussed back in the <a
        href="ux-and-accessibility">lecture on UX</a
      >. If you're able to figure out a way to note which side of one of these tests the log falls
      on, you could very easily see the impact of that kind of change.
    </p>
  </section>

  <section>
    <h2>Alerting</h2>

    <p>
      With all of this information flying at you, you'll quickly need a way of being notified if
      something is going wrong. A common tactic here is to trigger an email when this happens, or a
      Slack/Teams/Discord message if that's the main way your team communicates. In other words, a
      highly visible message people can easily react to.
    </p>

    <p>
      Error fatigue can creep up really quickly with these kinds of systems, so you have to be
      really careful here. My rule of thumb is that you should only alert on something that's
      immediately actionable. Put another way, if you don't know what to do with the piece of
      information you probably shouldn't be reporting on it.
    </p>
  </section>

  <section>
    <h2>North Star Metric</h2>

    <p>
      One strategy common in startups is to identify a key metric that everything in the business is
      oriented around, which can be treated as a "North Star" to guide decisions. I've found this
      particularly helpful in raising visibility around how the system is performing, it gives
      people a tangible sense of growth and makes problems obvious on a really visceral level.
    </p>

    <p>
      A few years ago, I was at a startup that rescheduled appointments via text message. I wanted
      to start giving people a sense of the scope of the system, so I created a Slack bot called
      "fill-bot" that would post a daily message on how many appointments were rescheduled the
      previous day.
    </p>
    <p>
      The team ended up really loving this system, they'd get excited when the number was higher
      than usual and grow concerned when it seemed a little low. There were often good reasons for
      fluctuations outside of our control, so one could have considered the message itself noise,
      but it became something we could rally around.
    </p>

    <p>
      So although alerts don't always have to be actionable, sometimes they instead help build a
      community. A more general rule to follow, then, could be that every alert must serve a
      purpose. Furthermore, if a notification is no longer serving its purpose it needs to be
      excised from the system immediately.
    </p>
  </section>

  <section>
    <h2>Performance</h2>

    <p>
      One area you'll need to monitor is performance, again there are a lot of products out there to
      help you with that. The challenge here is that there are a lot of random values that are easy
      to monitor, and there's a tendency to grab them all and build a dashboard with a whole bunch
      of useless charts.
    </p>

    <p>
      What I've found helpful is to identify situations where performance is both likely to degrade
      and has a negative impact on the business if it does. For example, let's say that we've
      noticed that checkout page load times are directly correlated to the number of orders placed,
      then we should specifically monitor load time on that page.
    </p>

    <p>
      A more general way to think about performance metrics are as an early warning system to more
      serious issues. In our example, checkout page load times act as a proxy for the number of
      orders placed, which has clear business value and would be expensive if the more obvious
      problem occurred. As a result, improving the load time has demonstrable business value that
      makes it worthwhile to keep an eye on.
    </p>
  </section>
</Lecture>
