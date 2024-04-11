'use server';

import { getAllProjects } from '@/data/all-projects';

export const showProjects = async (take?: number, skip?: number) => {
  const projects = await getAllProjects(take, skip);
  if (!projects) {
    return { error: 'Не удалось получить данные' };
  }

  return projects;
};
