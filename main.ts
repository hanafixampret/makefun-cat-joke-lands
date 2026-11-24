import { mkdirSync, writeFileSync } from "node:fs";

const joke = "The vet asked if my cat was friendly. She bit him. He wrote 'friendly' on the chart anyway.";

if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
