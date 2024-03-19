import { expect, test } from "vitest";
import { assignment, current_assignment } from "./lessons";

test("current assignment", () => {
  expect(current_assignment).not.toBeUndefined();
});

test("continuous_integration", () => {
  assignment("continuous-integration");
});