import { UserRole } from '@prisma/client';
import * as z from 'zod';

const ACCEPTED_IMAGE_TYPES = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'image/webp',
];
const MAX_IMAGE_SIZE = 2000000; //In MegaBytes

export const ProjectSchema = z.object({
  name: z.string().min(1, { message: 'Введите имя проекта.' }),
  description: z
    .string()
    .min(1, { message: 'Введите короткое описание проекта.' }),
  image: z
    .any()
    .refine(
      (file) => file?.size <= MAX_IMAGE_SIZE,
      'Максимальный размер фаила 2MB.'
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Используйте только .jpg, .jpeg, .png и .webp форматы.'
    ),
  link: z.string().min(1, { message: 'Введите сайт' }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    { message: 'Новый пароль должен быть', path: ['newPassword'] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    { message: 'Пароль должен быть', path: ['password'] }
  );

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Введите email',
  }),
  password: z.string().min(1, { message: 'Пароль должен быть' }),
});
export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: 'Введите email',
  }),
});
export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: 'Минимум 6 символов' }),
});
export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Введите email',
  }),
  password: z.string().min(6, { message: 'Минимум 6 символов' }),
  name: z.string().min(1, {
    message: 'Введите имя',
  }),
});

const regExp = /^((8|\+7|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

export const BriefSchema = z.object({
  name: z.string().min(1, { message: 'Имя должно быть' }),
  phone: z.string().regex(regExp, { message: 'Неверный формат телефона' }),
});
