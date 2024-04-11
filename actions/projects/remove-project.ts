'use server';

import { currentRole } from '@/lib/auth';
import { db } from '@/lib/db';
import { UserRole } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const removeProject = async (projectId: string) => {
  const role = await currentRole();
  if (role !== UserRole.ADMIN) {
    return { error: 'Не достаточно прав для совершения действия' };
  }

  try {
    await db.projects.delete({ where: { id: projectId } });
    revalidatePath('/add-project');
    return { success: 'Данные успешно удалены' };
  } catch (error) {
    return {
      error: 'Что то пошло не так',
    };
  }
};
