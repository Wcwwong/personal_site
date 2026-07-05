import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../lib/content";

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: "Willy W. | Writing",
    description: "Notes on AI-native building, project lessons, and honest postmortems.",
    site: context.site ?? "https://personal-site.pages.dev",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
