'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';

import CardWrapper from '@/components/auth/card-wrapper';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/my-components/input';
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { Suspense, useState, useTransition } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/my-components/button';
import { Button as ShadButton } from '@/components/ui/button';
import { login } from '@/actions/login';

const LoginForm_1 = () => {
  const params = useSearchParams();
  const urlError =
    params.get('error') === 'OAuthAccountNotLinked'
      ? 'Этот email уже используется'
      : '';

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const submit = (value: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');
    startTransition(() => {
      login(value).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        form.reset();
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Авторизация"
      backButtonLabek="Еще нет акаунта?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="space-y-6 ">
          <div className="space-y-4 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="text-accent  dark:bg-accent-300 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className="text-accent  dark:bg-accent-300 dark:text-white"
                    />
                  </FormControl>
                  <ShadButton
                    variant="link"
                    size="sm"
                    asChild
                    className="px-0 font-normal"
                  >
                    <Link href="/auth/forgot-password">Забыли пароль?</Link>
                  </ShadButton>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Войти
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

const LoginForm = () => {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <LoginForm_1 />
    </Suspense>
  );
};

export default LoginForm;
