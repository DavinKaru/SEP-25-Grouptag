import { fail } from '@sveltejs/kit';


export const actions = {
    comment: async ({ request, locals: { supabase, getSession } }) => {
        const my_user = await getSession()
        console.log(my_user)

        const {error} = await supabase.from('comments').insert({post_id: '629b17cf-b958-4ebb-879c-03622894d677', user_id: '032dcabb-97a3-47a3-8390-b2e5575da8bb', content: 'Nope!!!!!'})
        console.log(error)
        if(error){
            return(fail(500, { message: 'Server error. Try again later.', success: false}))
        }
      return {
        
        success: true,
      }
    },
  }