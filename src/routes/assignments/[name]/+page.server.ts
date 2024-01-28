import type { RequestEvent } from "@sveltejs/kit";

export function load({ params }: RequestEvent) {
  return { name: params.name };
}
