'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { LoginFormSchema, SignUpFormSchema } from '@/lib/validations/auth';

export async function login(formData: unknown) {
  const supabase = createClient();

  const validatedFormData = LoginFormSchema.safeParse(formData);

  if (!validatedFormData.success) {
    return {
      message: 'Invalid email or password.',
    };
  }

  try {
    await supabase.auth.signInWithPassword(validatedFormData.data);
  } catch (error) {
    console.log(error);
    return {
      message: 'Failed to sign in, please try again.',
    };
  }

  revalidatePath('/app/login', 'page');
}

export async function signup(formData: unknown) {
  const supabase = createClient();

  const validatedFormData = SignUpFormSchema.safeParse(formData);

  if (!validatedFormData.success) {
    return {
      message: 'Invalid email or password.',
    };
  }

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('email', validatedFormData.data.email);

  if (data?.length) return { message: 'User already exists.' };

  try {
    const response = await supabase.auth.signUp({
      ...validatedFormData.data,
      // TODO: change this link
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
      },
    });
    return response.error;
  } catch (error) {
    console.log(error);
    return {
      message: 'Failed to sign up, please try again.',
    };
  }

  revalidatePath('/app/signup', 'page');
}
