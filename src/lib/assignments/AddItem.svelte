<script lang="ts">
  import Assignment from "./Assignment.svelte";
  import type { Assignment as Assgn } from "$lib/lessons";

  export let assignment: Assgn;
</script>

<Assignment {assignment}>
  <p>
    This weeks assignment is to create a few item pages, each with an add button. When the add
    button is clicked, it sets that item in a shopping cart so that when the user eventualy goes to
    the checkout page they see that item. Then, when the order is placed, that item is added to the
    database as part of that order.
  </p>

  <p>
    As discussed in class, this should be accomplished using <code>localStorage</code>. Only being
    available via Javascript could be an issue the site needs to address later on, but the privacy
    benefits outweigh that problem for now. The server is able to avoid tracking the users
    activities until the moment when they actually place the order.
  </p>

  <p>
    Long term, we're of course going to want to add/remove multiple items per order, but techniques
    for accomplishing that are going to be covered in a later lesson. For this assignment, you
    should focus on a single item making its way onto the checkout page and into the database. If an
    item is already in the cart when a new one is added, it can simply replace that old item.
  </p>

  <p>
    You may be tempted to store the item details in the database, but resist that urge for now.
    Since North of Boston uses an inventory management system, there is a strong chance these items
    will instead be controlled via API requests. This is another topic we'll be covering in a later
    week, so for now you can just hard code a few items into the site.
  </p>

  <p>
    The last couple weeks we haven't been tending to our story board as much. Now that we're moving
    into functionality more heavily, though, I've tried to break the work down into smaller stories.
    Normally these smaller stories would probably combined into a single one with several acceptance
    tests, but I'm hoping that breaking it into smaller pieces will help you keep track of the
    individual requirements for this assignment.
  </p>
</Assignment>
