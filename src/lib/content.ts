import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectEntry = CollectionEntry<"projects">;
export type BlogEntry = CollectionEntry<"blog">;

export function projectStatusLabel(project: ProjectEntry) {
  return project.data.statusLabel ?? project.data.status.toUpperCase();
}

export function stackLine(stack: string[]) {
  return stack.join(" · ");
}

export function formatMonth(date: Date) {
  return date.toISOString().slice(0, 7);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export async function getProjects() {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.data.featured);
}

export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getLatestPosts(limit = 3) {
  const posts = await getPosts();
  return posts.slice(0, limit);
}
