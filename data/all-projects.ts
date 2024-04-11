import { db } from '@/lib/db';

export const getAllProjects = async (take?: number, skip?: number) => {
  try {
    const projects = await db.projects.findMany({ take, skip });
    return projects;
  } catch {
    return null;
  }
};
