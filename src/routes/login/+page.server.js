// src/routes/login/+page.server.js
import { AuthApiError } from '@supabase/supabase-js';
import { fail } from '@sveltejs/kit'

export const actions = {
  // @ts-ignore
  default: async ({request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email');
    const password = formData.get('password');
    /*const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
      },
    })*/
    const { error } = await supabase.auth.signInWithPassword({
      // @ts-ignore
      email,
      // @ts-ignore
      password,
    })

    if (error) {
      if(error instanceof AuthApiError && error.status == 400){
        return fail(400, { message: 'Invalid login credential.', success: false, email })
      }
      return fail(500, { message: 'Server error. Try again later.', success: false, email })
    }
    return {      
      message: 'Logged in',
      success: true,
      
    }
  },
}