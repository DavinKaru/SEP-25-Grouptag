//src/routes/app/post/+page.server.js

import { fail } from '@sveltejs/kit';



export const actions = {
    comment: async ({ request, locals: { supabase, getSession} }) => {
        const my_user = await getSession()
        const formData = await request.formData()
        const post_id = formData.get('post_id')?.toString()??'';
        const comment = formData.get('comment')?.toString()??'';
        const {error} = await supabase.from('comments').insert({post_id: post_id, user_id: my_user?.user.id , content: comment})
        if(error){
            return(fail(500, { message: 'Server error. Try again later.', success: false}))
        }
      return {
        
        success: true,
      }
    },
  }