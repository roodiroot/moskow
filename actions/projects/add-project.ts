'use server';

import { currentRole } from '@/lib/auth';
import { db } from '@/lib/db';
import { ProjectSchema } from '@/schemas';
import { UserRole } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import fs from 'fs/promises';

export const addProject = async (project: z.infer<typeof ProjectSchema>) => {
  const role = await currentRole();
  if (role !== UserRole.ADMIN) {
    return { error: 'Не достаточно прав для совершения действия' };
  }

  const file = project.image.get('fileUpload');
  const bytes = await file.arrayBuffer({ ty: file.type });

  const buffer = Buffer.from(bytes);

  const validatedFiled = ProjectSchema.safeParse({ ...project, image: file });
  if (!validatedFiled.success) {
    return { error: 'Введены не верные данные' };
  }

  console.log(validatedFiled);

  const data = validatedFiled.data;

  await fs.mkdir('public/static', { recursive: true });
  const filePath = `/static/${crypto.randomUUID() + data.image.name}`;
  await fs.writeFile(
    `public${filePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  try {
    await db.projects.create({
      data: {
        name: project.name,
        link: project.link,
        description: project.description,
        image: filePath,
      },
    });
    revalidatePath('/add-project');
    return { success: 'Данные успешно добавлены' };
  } catch (error) {
    return {
      error: 'Что то пошло не так',
    };
  }
};
