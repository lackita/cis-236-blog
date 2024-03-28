<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";

  import main_page from "$lib/assets/vercel-storage-main-page.png";
  import create_database from "$lib/assets/vercel-storage-create-database.png";
  import create_postgres from "$lib/assets/vercel-storage-create-postgres.png";
  import choose_sveltekit from "$lib/assets/vercel-storage-getting-started.png";
  import env_variables from "$lib/assets/vercel-env-tab.png";

  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    To explore the notion of a database, you will be building a checkout page. This will be a pretty
    dumb checkout page, you won't have to worry about introducing items on any level and there's no
    need to worry about taking payment information of any kind. On that side it will pretty much be
    a page with a button.
  </p>

  <p>
    The interesting bit, which will be what requires the database, is that you'll also be
    introducing a page useful for administrators of the system. When that button on the checkout
    page is clicked, an entry will be recorded in the database which can be viewed on this new page.
    Don't worry about limiting the access to the page or anything like that, you just need to build
    a page which shows a list of order dates pulled from the database.
  </p>

  <p>
    I created some example code you can use to guide your implementation. Pieces of this code will
    be referenced throughout this page, but you can interact with the end result <a
      href="https://northofboston-farm-pi.vercel.app/example">here</a
    >.
  </p>

  <section>
    <h2>Creating the Database</h2>

    <p>
      Vercel's free tier allows a single small database, so we're going to create a PostgreSQL
      database. I've created one for the main site controlled off of my repository, and have added
      screenshots so you can do the same on your version of the site.
    </p>

    <p>When you log in to Vercel, you will see a Storage tab at the top of the page:</p>

    <img alt="Storage link location" src={main_page} />

    <p>From there you will want to create a database:</p>

    <img alt="Create database location" src={create_database} />

    <p>Then select Postgres from the types of databases available:</p>

    <img alt="Create postgres location" src={create_postgres} />

    <p>
      You will have a few other choices to make about names and things like that, after which you'll
      land on a getting started page. Make sure to select the SvelteKit option from the top before
      following the instructions:
    </p>

    <img alt="Reminder to choose SvelteKit" src={choose_sveltekit} />

    <p>
      These steps will get you a basic setup for interacting with a database. Follow the first step
      of the "Getting Started" instructions, but skip the rest as I'll be setting up an alternative
      approach covered in the next section. You probably don't have the <code>vercel</code> CLI set up,
      but the big "Connect Project" button will accomplish the same goal. Keep that page open, though,
      as you'll need some information it provides to finish setting things up.
    </p>
  </section>

  <section>
    <h2>ORMs</h2>

    <p>
      Rather than interact directly with SQL, most of the time modern projects use something called
      an Object Relational Mapper, also known as an ORM. These tools simplify the management of
      databases, which will establish conventions we would otherwise need to build ourselves.
    </p>

    <p>
      For this project, I've updated the codebase to use <a href="https://www.prisma.io/">Prisma</a>
      to interact with Postgres. I'll provide the basics on this page and include an example page using
      it in the codebase.
    </p>

    <p>
      When you connected the project in the previous section, it set up environment variables in
      your Vercel project. To use the same database locally you'll need to add these to a file
      called <code>.env</code> in the root of your project. For the contents of that file, go back
      to that "Getting Started" page and look for the <code>.env.local</code> tab:
    </p>

    <img alt="Location of env tab" src={env_variables} />

    <p>
      This file isn't going to get checked into Git, as it's already excluded in the <a
        href="https://github.com/lackita/northofboston.farm/blob/main/.gitignore#L6"
        >.gitignore file</a
      >. This is a pretty typical pattern projects follow to allow a local setup for developers that
      never impacts production systems. Most of the time, you'll never gain access to the production
      credentials, they will be written in as part of the production deployment.
    </p>

    <section>
      <h3>Migrations</h3>

      <p>
        As discussed in class, typically you aren't going to have a full understanding of the schema
        prior to deployment. As a result, it will need to be altered regularly as you build
        features. In fact, attempting to fully design a schema before building features that use it
        is a great way to over-complicate the database.
      </p>

      <p>
        These revisions are typically known as migrations, and different ORMs handle them in
        different ways. The way Prisma handles it is to use a <a
          href="https://github.com/lackita/northofboston.farm/blob/main/prisma/schema.prisma"
          >schema file</a
        > to dictate the structure of the database.
      </p>

      <p>
        I created an <a
          href="https://github.com/lackita/northofboston.farm/blob/main/prisma/schema.prisma#L17-L20"
          >example table</a
        > to demonstrate how this works. After adding the model, I ran this to apply the change to the
        database:
      </p>

      <pre><code>
$ npx prisma migrate dev --name example
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "verceldb", schema "public" at "ep-still-credit-a4o5lgah.us-east-1.aws.neon.tech:5432"

Applying migration `20240327142754_example`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20240327142754_example/
    └─ migration.sql

Your database is now in sync with your schema.

Running generate... (Use --skip-generate to skip the generators)

added 1 package, and audited 211 packages in 2s

49 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

✔ Generated Prisma Client (v5.11.0) to ./node_modules/@prisma/client in 32ms
      </code></pre>

      <p>
        As you can see, the command also generated <a
          href="https://github.com/lackita/northofboston.farm/blob/main/prisma/migrations/20240327142754_example/migration.sql"
          >this file</a
        >, which specifies the actual sql that needs to be run to align the database with the schema
        file.
      </p>

      <p>
        Once you have your database set up, you should run <code>npx prisma migrate dev</code>
        yourself after pulling these changes down, what you'll find is that the database you created
        in the last step now also contains a table called <code>Example</code>. It accomplishes this
        by identifying any migration files not yet applied and running the sql in them. At this
        point, you can even run your local dev server and build up your own list of examples.
      </p>

      <p>
        In a production grade application, the migration would be run against production as part of
        the deployment process. This assignment is already complicated enough, though, so I'll
        accomplish this by running migrations manually after merging your changes.
      </p>
    </section>

    <section>
      <h3>Working With Objects</h3>

      <p>
        The reason ORMs get their name is because they take information in the database and map them
        to objects. Instead of writing a select query and manipulating the results, you are able to
        call a function that constructs the query and maps it to an object. You can see that in the
        example <a
          href="https://github.com/lackita/northofboston.farm/blob/main/src/lib/server/database/prisma.js#L13"
          >here</a
        >, here's the relevant line:
      </p>

      <pre><code>const records = await this.client.Example.findMany();</code></pre>

      <p>
        Underneath, this is generating and executing a <code>SELECT</code> query. It's then taking the
        results and mapping it to an array of objects that looks like this:
      </p>

      <pre><code>
[{"{"}
  id: 1,
  value: "one",
{"}"}]
      </code></pre>

      <p>
        In practice, it doesn't mean you can forget about the database, but it can simplify basic
        use cases. If you start getting into complex queries, you'll find yourself fighting with the
        tool, but it's extremely helpful 99% of the time.
      </p>
    </section>
  </section>

  <section>
    <h2>SQL Refresher</h2>

    <p>
      Even though you're not going to be writing queries directly, I did promise a SQL refresher.
      What I had in mind is a little game called <a href="https://sql-island.informatik.uni-kl.de/"
        >SQL Island</a
      >. It's written in German, but there's other translations buried in the menu. For example,
      <a href="https://datalemur.com/blog/sql-island-in-english-answers">these instructions</a> show
      you how to switch to the English version.
    </p>
  </section>

  <section>
    <h2>Acceptance Tests</h2>

    <p>
      You can find the actual story you're completing <a
        href="https://github.com/lackita/northofboston.farm/issues/51">here</a
      >, but because this is the first one that has acceptance tests I'm going to break down what's
      expected more explicitly.
    </p>

    <p>
      The first acceptance test is "The user can reach the order from wherever they are on the
      site", and this is more UI oriented. Another way to think about it is that you want to put a
      link to a shopping cart somewhere in the header. Because this criteria is related to the user
      interface, we're not going to worry about implementing an automated test as part of this
      course, manual testing is sufficient.
    </p>

    <p>
      The second acceptance test is "When an order is placed, it appears in the order history." You
      will be expected to created an automated test for this, but not by using the database. I've
      established a pattern with the example, which you should follow in your solution.
    </p>

    <section>
      <h3>Testable Design</h3>

      <p>
        Let's begin by looking at the <a
          href="https://github.com/lackita/northofboston.farm/blob/main/src/lib/server/example_list.js"
          >logic to list examples</a
        >:
      </p>

      <pre><code>
export async function example_list(table) {"{"}
    return await table.all();
{"}"}
      </code></pre>

      <p>
        Notice how it's completely unaware of the fact that it's interacting with Prisma or the
        database. You get a clue to that purpose with the variable <code>table</code>, but that's
        just a name to make how it's used clearer.
      </p>

      <p>
        Because of this inversion of dependencies, it's possible to pass any object into this
        function that implements <code>all</code>. Most importantly, look at one of the
        <a
          href="https://github.com/lackita/northofboston.farm/blob/main/src/lib/server/example_list.test.js"
          >tests for this function</a
        >:
      </p>

      <pre><code>
{`
import { Examples } from "./database/memory";

test("one example", async () => {
    const value = "value";
    expect(await example_list(new Examples([value]))).toContainEqual(value);
});
`}
      </code></pre>

      <p>
        Notice that this test uses an <a
          href="https://github.com/lackita/northofboston.farm/blob/main/src/lib/server/database/memory.js"
          >in-memory database</a
        >. This isn't anything fancy, all we're really doing is maintaining a list inside of a class
        that can stand in for the database. Here's the code for that class, which is what we'll be
        using when running our tests.
      </p>

      <pre><code
          >{`
export class Examples extends MemoryTable {
    async all() {
        return this.records;
    }

    async add(value) {
        this.records.push(value);
    }
}
      `}</code
        ></pre>

      <p>
        When running with the actual site, on the other hand, you would use <a
          href="https://github.com/lackita/northofboston.farm/blob/main/src/lib/server/database/prisma.js"
          >the Prisma implementation</a
        >. Notice how it implements all of the same methods, and neatly hides the implementation
        details of interacting with that database behind this abstraction.
      </p>

      <pre><code
          >{`
export class Examples extends PrismaTable {
    async all() {
        const records = await this.client.Example.findMany();
        return records.map((record) => record.value);
    }

    async add(value) {
        await this.client.Example.create({
            data: { value },
        });
    }
}
      `}</code
        ></pre>

      <p>
        Now, when building a list of examples to display, this class can be used instead. The <code
          >all</code
        >
        method in both cases returns a list of strings. When interacting with examples when loading the
        page, they would be
        <a
          href="https://github.com/lackita/northofboston.farm/blob/main/src/routes/example/%2Bpage.server.js"
          >loaded like this</a
        >:
      </p>

      <pre><code>
{`import { example_list } from "$lib/server/example_list";
import { Examples } from "$lib/server/database/prisma";

export async function load() {
    return {
        values: await example_list(new Examples()),
    };
}`}
      </code></pre>

      <p>
        When building the code to allow checkout, you will need to build classes that also extend <code
          >MemoryTable</code
        >
        and <code>PrismaTable</code>. You should then build functions in <code>src/lib/server</code>
        that have unit tests attached to them using the <code>MemoryTable</code> implementation. All
        the code included in <code>+page.server.js</code> should accomplish is connecting the
        <code>DatabaseTable</code> implementation to a function call and defining the returned data structure.
      </p>
    </section>
  </section>
</Assignment>
