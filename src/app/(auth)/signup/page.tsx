'use client';

import Loader from '@/components/loader';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signup } from '@/lib/actions/auth';
import { cn } from '@/lib/utils';
import { SignUpFormFields, SignUpFormSchema } from '@/lib/validations/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function Page() {
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState<string>('');
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const codeExchangeError = useMemo(() => {
    if (!searchParams) return '';

    return searchParams.get('error_description');
  }, [searchParams]);

  const confirmationAndErrorStyle = useMemo(
    () =>
      cn('bg-primary-purple-500', {
        'bg-destructive/10 border-destructive/50 text-destructive':
          codeExchangeError,
      }),
    [codeExchangeError],
  );

  const form = useForm<SignUpFormFields>({
    mode: 'onChange',
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<SignUpFormFields> = async (formData) => {
    const error = await signup(formData);

    if (error) {
      reset();
      setSubmitError(error.message);
      return;
    }
    setConfirmation(true);
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
            width={32}
            height={32}
          />
          <span className="text-xl font-semibold first-letter:ml-2 dark:text-white">
            motion.
          </span>
        </Link>
        <FormDescription className="text-foreground/60">
          An All-in-One Collaboration and Productivity Platform
        </FormDescription>
        {!confirmation && !codeExchangeError && (
          <>
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
            <FormField
              disabled={isSubmitting}
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full gap-x-2 p-6"
              disabled={isSubmitting}
            >
              {!isSubmitting ? (
                'Create Account'
              ) : (
                <>
                  <Loader /> Create Account
                </>
              )}
            </Button>
          </>
        )}
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <span className="self-center">
          Already have an account?{' '}
          <Link href="/login" className="text-primary-purple-500">
            Login
          </Link>
        </span>
        {(confirmation || codeExchangeError) && (
          <Alert className={confirmationAndErrorStyle}>
            {!codeExchangeError && <MailCheck className="h-4 w-4" />}
            <AlertTitle>
              {codeExchangeError ? 'Invalid Link' : 'Check your email'}
            </AlertTitle>
            <AlertDescription>
              {codeExchangeError ||
                'An email confirmation has been sent to your inbox.'}
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
}
