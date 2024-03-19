import AgileProjectStructure from "$lib/lectures/AgileProjectStructure.svelte";
import MeetWithClient from "$lib/lectures/MeetWithClient.svelte";
import PlanningAndWebFrameworks from "$lib/lectures/PlanningAndWebFrameworks.svelte";
import Hosting from "$lib/lectures/Hosting.svelte";
import UXAndAccessibility from "$lib/lectures/UXAndAccessibility.svelte";
import PrototypingAndDemoDayPrep from "$lib/lectures/PrototypingAndDemoDayPrep.svelte";
import FeedbackDemoDay from "$lib/lectures/FeedbackDemoDay.svelte";
import Testing from "$lib/lectures/Testing.svelte";

import SiteResearch from "$lib/assignments/SiteResearch.svelte";
import StoryCreation from "$lib/assignments/StoryCreation.svelte";
import SvelteAndSvelteKit from "$lib/assignments/SvelteAndSvelteKit.svelte";
import DeployYourSite from "$lib/assignments/DeployYourSite.svelte";
import SemanticTags from "$lib/assignments/SemanticTags.svelte";
import Prototype from "$lib/assignments/Prototype.svelte";
import FeedbackSummary from "$lib/assignments/FeedbackSummary.svelte";
import ContinuousIntegration from "$lib/assignments/ContinuousIntegration.svelte";

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
      date: new Date(2024, 0, 23, 14),
      title: "Agile Project Structure",
      path_name: "agile-project-structure",
      component: AgileProjectStructure,
    },
    assignment: {
      title: "Site Research",
      path_name: "site-research",
      due: new Date(2024, 1, 1, 14),
      component: SiteResearch,
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 1, 14),
      title: "Meet With Client",
      path_name: "meet-with-client",
      component: MeetWithClient,
    },
    assignment: {
      title: "Story Creation",
      path_name: "story-creation",
      due: new Date(2024, 1, 6, 14),
      component: StoryCreation,
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 6, 14),
      title: "Planning and Web Frameworks",
      path_name: "planning-and-web-frameworks",
      component: PlanningAndWebFrameworks,
    },
    assignment: {
      title: "Svelte and SvelteKit",
      path_name: "svelte-and-svelte-kit",
      due: new Date(2024, 1, 13, 14),
      revisions: new Date(2024, 1, 16),
      component: SvelteAndSvelteKit,
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 13),
      title: "Hosting",
      path_name: "hosting",
      component: Hosting,
    },
    assignment: {
      title: "Deploy Your Site",
      path_name: "deploy-your-site",
      due: new Date(2024, 1, 20),
      revisions: new Date(2024, 1, 23),
      component: DeployYourSite,
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 20),
      title: "User Experience and Accessibility",
      path_name: "ux-and-accessibility",
      component: UXAndAccessibility,
    },
    assignment: {
      title: "Semantic Tags",
      path_name: "semantic-tags",
      due: new Date(2024, 1, 27),
      revisions: new Date(2024, 2, 1),
      component: SemanticTags,
    },
  },

  {
    lecture: {
      date: new Date(2024, 1, 27),
      title: "Prototyping and Demo Day Prep",
      path_name: "prototyping-and-demo-day-prep",
      component: PrototypingAndDemoDayPrep,
    },
    assignment: {
      title: "Prototype",
      due: new Date(2024, 2, 5),
      path_name: "prototype",
      revisions: new Date(2024, 2, 5),
      component: Prototype,
    },
  },

  {
    lecture: {
      date: new Date(2024, 2, 5),
      title: "Demo Day",
      path_name: "feedback-demo-day",
      component: FeedbackDemoDay,
    },
    assignment: {
      title: "Feedback Summary",
      due: new Date(2024, 2, 8),
      path_name: "feedback-summary",
      component: FeedbackSummary,
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
      title: "Testing",
      path_name: "testing",
      component: Testing,
    },
    assignment: {
      title: "Continuous Integration",
      due: new Date(2024, 2, 26),
      revisions: new Date(2024, 2, 29),
      path_name: "continuous-integration",
      component: ContinuousIntegration,
    },
  },

  {
    lecture: {
      date: new Date(2024, 2, 26),
      title: "Databases",
    },
    assignment: {
      title: "Schema Design",
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
  return calendar.find((week) => week.assignment?.path_name === path_name)!.assignment as Assignment;
}

const current_lecture: Lecture = calendar.reduce(
  (most_recent: Lecture, week: Week) => (week.lecture.component ? week.lecture : most_recent),
  {} as Lecture,
);

const current_assignment: Assignment = calendar.reduce((most_recent: Assignment, week: Week) => {
  return week.assignment?.path_name ? week.assignment : most_recent;
}, {} as Assignment);

export type { Week, Material, Assignment, Lecture };
export { calendar, lecture, assignment, current_lecture, current_assignment };
