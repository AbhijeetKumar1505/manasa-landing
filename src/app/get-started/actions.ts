'use server';

import { createClient } from '@utils/supabase/server';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export interface WaitlistFormData {
  userType: 'student' | 'institution' | 'counselor';
  name: string;
  email: string;
  phone: string;
  institution?: string;
  grade?: string;
  interest?: string;
}

export async function submitWaitlistEntry(formData: WaitlistFormData) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          user_type: formData.userType,
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          institution: formData.institution?.trim() || null,
          grade: formData.grade || null,
          interest: formData.interest || null,
        },
      ])
      .select()
      .single();

    if (error) {
      // Handle duplicate email error
      if (error.code === '23505') {
        return {
          success: false,
          error: 'This email is already registered. Please use a different email address.',
        };
      }
      
      console.error('Error inserting waitlist entry:', error);
      return {
        success: false,
        error: 'Failed to submit registration. Please try again later.',
      };
    }

    revalidatePath('/get-started');
    
    return {
      success: true,
      data,
      message: 'Your registration has been submitted successfully!',
    };
  } catch (err) {
    console.error('Unexpected error:', err);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}

