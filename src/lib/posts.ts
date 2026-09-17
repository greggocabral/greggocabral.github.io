import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export interface SubCategoryGroup {
  name: string;
  posts: Post[];
}

export interface CategoryGroup {
  name: string;
  subCategories: SubCategoryGroup[];
}

// Categories not listed here are appended after these, in first-seen order.
const CATEGORY_ORDER = ['Blog', 'Projects'];

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort(
    (a, b) =>
      b.data.date.valueOf() - a.data.date.valueOf() ||
      (a.data.order ?? 0) - (b.data.order ?? 0),
  );
}

/** Groups posts into category → sub-category → posts, preserving post order. */
export function groupPosts(posts: Post[]): CategoryGroup[] {
  const categories = new Map<string, Map<string, Post[]>>();
  for (const post of posts) {
    const { category, subCategory } = post.data;
    if (!categories.has(category)) categories.set(category, new Map());
    const subCategories = categories.get(category)!;
    if (!subCategories.has(subCategory)) subCategories.set(subCategory, []);
    subCategories.get(subCategory)!.push(post);
  }

  const rank = (name: string) => {
    const i = CATEGORY_ORDER.indexOf(name);
    return i === -1 ? CATEGORY_ORDER.length : i;
  };

  return [...categories]
    .sort(([a], [b]) => rank(a) - rank(b))
    .map(([name, subCategories]) => ({
      name,
      subCategories: [...subCategories].map(([name, posts]) => ({ name, posts })),
    }));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
