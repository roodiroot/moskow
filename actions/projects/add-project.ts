'use server';

import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

import { currentRole } from '@/lib/auth';
import { db } from '@/lib/db';
import { ProjectSchema } from '@/schemas';
import { UserRole } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export const addProject = async (project: z.infer<typeof ProjectSchema>) => {
  const role = await currentRole();
  if (role !== UserRole.ADMIN) {
    return { error: 'Не достаточно прав для совершения действия' };
  }

  const file = project.image.get('fileUpload');
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const validatedFiled = ProjectSchema.safeParse({ ...project, image: file });
  if (!validatedFiled.success) {
    return { error: 'Введены не верные данные' };
  }

  const fileName = uuid.v4() + '.jpg';
  const filePath = path.join(process.cwd(), 'public', 'static');

  try {
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }
    fs.writeFileSync(path.join(filePath, fileName), buffer);
  } catch {
    return { error: 'Данные не добавлены' };
  }

  try {
    await db.projects.create({
      data: {
        name: project.name,
        link: project.link,
        description: project.description,
        image: fileName,
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
