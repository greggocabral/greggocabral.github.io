import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** Current projects, in `order` (then title). */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort(
    (a, b) =>
      (a.data.order ?? 0) - (b.data.order ?? 0) || a.data.title.localeCompare(b.data.title),
  );
}
