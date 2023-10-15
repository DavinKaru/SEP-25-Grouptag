// src/routes/login/+page.server.js
import { AuthApiError } from '@supabase/supabase-js';
import { fail } from '@sveltejs/kit'

export const actions = {
  default: async ({request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email')?.toString()??'';
    const password = formData.get('password')?.toString()??'';
    const fName = formData.get('fName')?.toString()??'';
    const lName = formData.get('lName')?.toString()??'';
    const dob = formData.get('dob')?.toString()??'';
    const bio = formData.get('bio')?.toString()??'';
    const university = formData.get('university'.toString())??'';
    const course = formData.get('course')?.toString()??'';

    console.log("start");      
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${url.origin}/auth/callback`,
        data:{
          first_name: fName,
          last_name: lName,
          dob: dob,
          bio: bio,
          university: university,
          course: course
        }
      },
    })
    console.log("end");      
    console.log(error);  
    if (error) {
      if(error instanceof AuthApiError && error.status == 400){
        return fail(400, { message: 'Invalid login credential.', success: false, email })
      }
      return fail(500, { message: 'Server error. Try again later.', success: false, email })
    }
    
    return {      
      message: 'Sign Up',
      success: true,
      
    }
  },
  
}