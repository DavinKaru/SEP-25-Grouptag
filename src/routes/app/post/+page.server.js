import { supabase } from '$lib/supabaseClient';
import { fail } from '@sveltejs/kit';

export async function load({url}) {
    const post_id = url.searchParams.get('id')??'';
    const { data: Posts } = await supabase.from('posts').select().eq('post_id', post_id);
    const post = Posts?.find((p) => p.post_id === post_id);
    const { data: Users } = await supabase.from('users').select().eq('user_id', post.user_id);
    const { data: Groups } = await supabase.from('groups').select().eq('group_id', post.group_id);
    const { data: Comments } = await supabase.rpc('get_comments', {get_post_id: post_id});
    // console.log("Users from DB:", Users);     
     //console.log("Posts from DB:", post.group_id);
    // console.log("Groups from DB:", Groups);
    //console.log(Comments)

    return {

        Users: Users ?? [],
        Posts: Posts ?? [],
        Groups: Groups ?? [],
        Comments: Comments ?? []
    };
}

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