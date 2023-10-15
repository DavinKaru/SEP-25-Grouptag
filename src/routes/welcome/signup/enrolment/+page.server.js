// src/routes/login/+page.server.js
import { fail } from '@sveltejs/kit'

export const actions = {
  uniCheck: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const university = formData.get('university')
    const course = formData.get('course')
    const check = await supabase.rpc("unicheck")

    if (check) {
      return fail(404, { message: 'Sorry cannot find university or course.', success: false, university, course})
      console.log("failed")
    }
    console.log("success")
    return {
      
      success: true,
    }
  },
}