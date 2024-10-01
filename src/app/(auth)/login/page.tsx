'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormFields, LoginFormSchema } from '@/lib/validations/auth';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '@/components/loader';
import { login } from '@/lib/actions/auth';

export default function Page() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState('');

  const form = useForm<LoginFormFields>({
    mode: 'onChange',
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    formState: { isSubmitting },
    control,
    handleSubmit,
    reset,
  } = form;

  const onSubmit: SubmitHandler<LoginFormFields> = async (formData) => {
    const error = await login(formData);

    if (error) {
      reset();
      setSubmitError(error.message);
    }

    router.replace('/dashboard');
  };

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) {
            setSubmitError('');
          }
        }}
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-6 sm:w-[400px] sm:justify-center"
      >
        <Link href="/" className="flex w-full items-center justify-start">
          <Image
            src="/icons/logo.svg"
            alt="Motion logo"
            width={50}
            height={50}
          />
          <span className="text-4xl font-semibold first-letter:ml-2 dark:text-white">
            motion.
          </span>
        </Link>
        <FormDescription className="text-foreground/60">
          An All-in-One Collaboration and Productivity Platform
        </FormDescription>
        <FormField
          disabled={isSubmitting}
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isSubmitting}
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button
          type="submit"
          className="w-full p-6"
          size={'lg'}
          disabled={isSubmitting}
        >
          {!isSubmitting ? 'Sign In' : <Loader />}
        </Button>
        <span className="self-center">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-primary-purple-500">
            Sign Up
          </Link>
        </span>
      </form>
    </Form>
  );
}
