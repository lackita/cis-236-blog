<script lang="ts">
  import Lecture from "./Lecture.svelte";
  import type { Lecture as Lect } from "../lessons";
  export let lecture: Lect;
</script>

<Lecture {lecture}>
  <p>
    At the heart of many web applications is some form of database, but the choice of what type to
    use isn't at all clear. A lot of modern systems like to use NoSQL, claiming that it's more
    scalable, but why do the say that? It turns out that different databases make different
    decisions about the tradeoffs involved, in practice they all lie on a continuum between
    scalability and consistency.
  </p>

  <section>
    <h2>The Scalability/Consistency Continuum</h2>

    <p>
      In theoretical computer science, there's something called the <a
        href="https://en.wikipedia.org/wiki/CAP_theorem">CAP Theorem</a
      >. The formal language is a bit difficult to digest, but the up-shot is that it's only
      possible for a database to achieve two out of three of the following:
    </p>

    <ul>
      <li>Consistency: Every read receives the most recent write or an error</li>
      <li>Availability: Every request receives a non-error response</li>
      <li>
        Partition Tolerance: The system is tolerant of networking issues between machines that are
        part of the database
      </li>
    </ul>

    <p>
      In practice, networking issues are impossible to prevent, so databases are forced to choose
      between consistency and availability.
    </p>

    <section>
      <h3>Race Conditions</h3>

      <p>
        To understand these concepts, let's consider logic to increment a number. More specifically,
        let's say these records are already in the system:
      </p>

      <table>
        <tr><th>Value</th></tr>
        {#each [1, 2, 3, 4] as i}
          <tr><td>{i}</td></tr>
        {/each}
      </table>

      <p>
        Now we want to write the next value into the database. To accomplish this, you have a query to
        identify the largest value, in this case 4, and insert a record that is 1 more than that
        value.
      </p>

      <p>
        Now suppose this same code is called twice at exactly the same time, we'll call these
        processes A and B. This is a fairly classic example of a race condition, and before dealing
        with how it relates to databases let me illustrate how it can go wrong. Consider the
        following sequence of events:
      </p>

      <ol>
        <li>A gets the largest value in the database (<code>a = 4</code>)</li>
        <li>B gets the largest value in the database (<code>b = 4</code>)</li>
        <li>A writes <code>a + 1</code> to the database (5)</li>
        <li>B writes <code>b + 1</code> to the database (5)</li>
      </ol>

      <p>
        As you can see, the two processes step on each others toes and both end up writing the same
        value, leaving the final database in this form:
      </p>

      <table>
        <tr><th>Value</th></tr>
        {#each [1, 2, 3, 4, 5, 5] as i}
          <tr><td>{i}</td></tr>
        {/each}
      </table>

      <section>
        <h3>Consistency</h3>

        <p>
          A consistent database is one where the situation I outlined above is impossible. It
          provides the guarantee that all data is up to date, typically through a mechanism known as
          a transaction.
        </p>

        <p>
          A full understanding of transactions is outside the scope of this class, but this is how
          they would behave in our example above:
        </p>

        <ol>
          <li>A opens a transaction on the table</li>
          <li>A gets the largest value in the database (<code>a = 4</code>)</li>
          <li>B opens a transaction on the table</li>
          <li>B has to wait because another transaction is already open</li>
          <li>A writes <code>a + 1</code> to the database (5)</li>
          <li>A closes the transaction</li>
          <li>B gets the largest value in the database (<code>b = 5</code>)</li>
          <li>B writes <code>b + 1</code> to the database (6)</li>
          <li>B closes the transaction</li>
        </ol>

        <p>
          Most databases are actually doing much more complicated things, but this sequence can
          serve as a reasonable mental model when thinking about them. The transaction forces the
          second process to wait until the first completes to be able to complete its task.
        </p>
      </section>

      <section>
        <h3>Availability</h3>

        <p>
          At this point, consistency probably sounds amazing, and in fact that quality dominated the
          industry for a long time. The problem, though, arises when the system served by the
          database begins to grow.
        </p>

        <p>
          Ideally, as the load begins to climb on the server hosting the database, you'd be able to
          introduce a new host and balance the load between them. Let's return to our example, now
          adding in servers X and Y:
        </p>

        <ol>
          <li>A opens a transaction on the table through X</li>
          <li>A gets the largest value in the database (<code>a = 4</code>)</li>
          <li>B opens a transaction on the table through Y</li>
          <li>
            Y communicates with X to determine that a transaction is already open, so B has to wait
          </li>
          <li>A writes <code>a + 1</code> to the database (5)</li>
          <li>A closes the transaction</li>
          <li>B gets the largest value in the database (<code>b = 5</code>)</li>
          <li>B closes the transaction</li>
          <li>B writes <code>b + 1</code> to the database (6)</li>
        </ol>

        <p>
          As you can see, to maintain consistency communication must occur between the two servers.
          Maybe this doesn't sound so bad, but now consider what happens when you have 1000
          machines. Whenever a transaction is opened on any one of them, it must somehow be aware of
          transactions on all 999 other machines to continue to provide this guarantee.
        </p>

        <p>
          It's debatable if this assurance is even possible at such a large scale, but even if it
          were the amount of time necessary to check completely would be astronomical. During this
          time, the host would be unavailable, and the only way to provide availability at this
          scale is to sacrifice this consistency.
        </p>
      </section>
    </section>

    <section>
      <h2>Horizontal vs Vertical Scaling</h2>

      <p>
        Because consistency dominated the industry for so long, the only reasonable way of handling
        more load as systems scaled was to upgrade to bigger and bigger machines. This is also known
        as vertical scaling, and leads to individual extremely expensive machines.
      </p>

      <p>
        Systems that prefer availability give us a different option. Instead of buying bigger and
        bigger machines it's possible to buy lots of cheap ones. This is what's known as horizontal
        scaling, and is what happens at large copanies.
      </p>
    </section>
  </section>

  <section>
    <h2>Types of Databases</h2>

    <p>
      This tension between consistency and scalability means different types of databases are
      appropriate in different situations. When considering what database to use, you should think
      about these tradeoffs and which direction is better for the situation.
    </p>

    <section>
      <h3>Relational Databases</h3>

      <p>
        When you don't think things will scale to millions of transactions, you can't beat the
        reliability of a traditional database. These systems are rock solid and you never have to
        worry about issues resulting from inconsistent state.
      </p>

      <p>
        Typical options here include Oracle and PostgreSQL. There are a ton of different
        implementations, though, and they all conform to a common language called SQL. Most will
        build extensions to the language that allow more complex queries, but if you limit use of
        those special forms it's not an inordinate amount of effort to move between databases.
      </p>
    </section>

    <section>
      <h3>NoSQL</h3>

      <p>
        If you think the system is going to need to eventually handle a massive amount of traffic,
        it's worth considering a NoSQL database. Unlike relational databases, these will all look
        extremely different, and each has its own specific query language. Popular choices in this
        category include Redis, Mongo and Cassandra, each providing different performance tradeoffs.
      </p>

      <p>
        One term that's thrown around in these communities is eventual consistency. All this really
        means is that, even though they can't provide full consistency, the database eventually
        becomes consistent through replicating the data across machines.
      </p>

      <p>
        There are also some more specialized databases out there that fall under the umbrella of
        NoSQL. These include things like graph and object databases, and generally serve more
        specialized purposes.
      </p>
    </section>
  </section>

  <section>
    <h2>Testing</h2>

    <p>
      When it comes to databases, testing can get fairly complicated. If you use the database that
      runs in production during tests, it can incur substantial performance penalties that make it
      difficult to run your tests frequently. In addition, getting a database set up in a Continuous
      Integration system can be relatively complicated.
    </p>

    <p>
      To combat this, I'll be adding some facilities to the codebase which allow you to isolate the
      database interactions. You'll still need to design the queries, but writing unit tests to
      ensure the queries work correctly is going to be too complex for this course. This concept
      will be covered more thoroughly in the assignment.
    </p>
  </section>
</Lecture>
