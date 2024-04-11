'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ProjectSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/form-error';
import FormSuccess from '@/components/form-success';
import { zodResolver } from '@hookform/resolvers/zod';
import { addProject } from '@/actions/projects/add-project';

const AddProjectsForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      name: '',
      description: '',
      image: '',
      link: '',
    },
  });
  const submit = (value: z.infer<typeof ProjectSchema>) => {
    setError('');
    setSuccess('');
    const file = new FormData();
    file.append('fileUpload', value.image);

    startTransition(() => {
      addProject({ ...value, image: file }).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        form.reset();
      });
    });
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-accent  dark:bg-accent-300 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Сайт</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-accent  dark:bg-accent-300 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Изображение</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldProps}
                      type="file"
                      accept="image/png, image/jpg, image/jpeg, image/webp"
                      onChange={(e) =>
                        onChange(e.target.files && e.target.files[0])
                      }
                      className="text-accent  dark:bg-accent-300 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }: { field: any }) => (
                <FormItem className="lg:col-span-3">
                  <FormLabel>Описание</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="text-accent  dark:bg-accent-300 dark:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit">
            Добавить проект
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProjectsForm;
