// src/routes/login/+page.server.js
import { fail } from '@sveltejs/kit'

export const actions = {
  uniCheck: async ({ request, url, locals: { supabase } }) => {
    const formData = await request.formData()
    const university = formData.get('university')?.toString().trim()
    const course = formData.get('course')?.toString().trim()
    const check = await supabase.rpc("check_uni_and_course", {uni: university, cou: course})
    console.log(check.data[0].university)
    console.log(check.data[0].course)
    if (!check.data[0].university) {
      return fail(404, { message: 'Sorry cannot find university or course.', success: false, university, course})
    }
    if (!check.data[0].course) {
      return fail(404, { message: 'Sorry cannot find course.', success: false, university, course})
    }
    return {      
      success: true,
    }
  },
}