import AgileProjectStructure from "$lib/lectures/AgileProjectStructure.svelte";
import SiteResearch from "$lib/assignments/SiteResearch.svelte";
import type { ComponentType } from "svelte";

interface Material {
  title: string;
  path_name?: string;
  component?: ComponentType;
}

interface Lecture extends Material {
  date: Date;
  end?: Date;
}

interface Assignment extends Material {
  due: Date;
  revisions?: Date;
}

interface Week {
  lecture: Lecture;
  assignment?: Assignment;
}

const calendar: Week[] = [
  {
    lecture: {
      date: new Date(2024, 0, 23),
      title: "Agile Project Structure",
      path_name: "agile-project-structure",
      component: AgileProjectStructure,
    },
    assignment: {
      title: "Site Research",
      path_name: "site-research",
      due: new Date(2024, 1, 1),
      component: SiteResearch,
    },
  },
  {
    lecture: {
      date: new Date(2024, 1, 1),
      title: "Meet With Client",
    },
    assignment: {
      title: "Story Creation",
      due: new Date(2024, 1, 6),
      revisions: new Date(2024, 1, 9),
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 6),
      title: "Estimation and Planning",
    },
    assignment: {
      title: "Project Plan",
      due: new Date(2024, 1, 13),
      revisions: new Date(2024, 1, 16),
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 13),
      title: "Web Frameworks",
    },
    assignment: {
      title: "Svelte and SvelteKit",
      due: new Date(2024, 1, 20),
      revisions: new Date(2024, 1, 23),
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 20),
      title: "User Experience",
    },
    assignment: {
      title: "Static Content and User Profiles",
      due: new Date(2024, 1, 27),
      revisions: new Date(2024, 2, 1),
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 27),
      title: "Demo Day Prep",
    },
    assignment: {
      title: "Demo Preparation",
      due: new Date(2024, 2, 5),
    },
  },

  {
    lecture: {
      date: new Date(2024, 2, 5),
      title: "Demo Day",
    },
    assignment: {
      title: "Feedback Summary",
      due: new Date(2024, 2, 8),
    },
  },

  {
    lecture: {
      date: new Date(2024, 2, 10),
      end: new Date(2024, 2, 17),
      title: "Spring Break",
    },
  },

  {
    lecture: {
      date: new Date(2024, 2, 19),
      title: "Databases",
    },
    assignment: {
      title: "Schema Design",
      due: new Date(2024, 2, 26),
      revisions: new Date(2024, 2, 29),
    },
  },

  {
    lecture: {
      date: new Date(2024, 2, 26),
      title: "Shopping Carts",
    },
    assignment: {
      title: "Shopping cart and item pages",
      due: new Date(2024, 3, 2),
      revisions: new Date(2024, 3, 5),
    },
  },

  {
    lecture: {
      date: new Date(2024, 3, 2),
      title: "Authentication",
    },
    assignment: {
      title: "Login pages and cart conversion",
      due: new Date(2024, 3, 9),
      revisions: new Date(2024, 3, 12),
    },
  },

  {
    lecture: {
      date: new Date(2024, 3, 9),
      title: "Payments",
    },
    assignment: {
      title: "Checkout",
      due: new Date(2024, 3, 16),
      revisions: new Date(2024, 3, 19),
    },
  },

  {
    lecture: {
      date: new Date(2024, 3, 16),
      title: "Monitoring",
    },
    assignment: {
      title: "North star metric",
      due: new Date(2024, 3, 23),
      revisions: new Date(2024, 3, 26),
    },
  },

  {
    lecture: {
      date: new Date(2024, 3, 23),
      title: "Backend operations",
    },
    assignment: {
      title: "Route planner",
      due: new Date(2024, 3, 30),
      revisions: new Date(2024, 4, 3),
    },
  },

  {
    lecture: {
      date: new Date(2024, 3, 30),
      title: "Prepare for final demo",
    },
    assignment: {
      title: "Prep for final demo",
      due: new Date(2024, 4, 7),
      revisions: new Date(2024, 4, 7),
    },
  },

  {
    lecture: {
      date: new Date(2024, 4, 7),
      title: "Final Demo",
    },
  },
];

function lecture(path_name: string): Lecture {
  return calendar.find((week) => week.lecture.path_name === path_name)!.lecture;
}

function assignment(path_name: string): Assignment {
  return calendar.find((week) => week.assignment!.path_name === path_name)!
    .assignment as Assignment;
}

export type { Week, Material };
export { calendar, lecture, assignment };
