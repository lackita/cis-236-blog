import { writable } from "svelte/store";

const language = writable<string>(undefined);
let lang: string | undefined = undefined;
language.subscribe((l) => (lang = l));

function format_date(date: Date): string {
  return date.toLocaleDateString(lang, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export { language, format_date };
