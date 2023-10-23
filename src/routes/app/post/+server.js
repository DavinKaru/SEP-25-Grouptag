import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
    const post_id = url.searchParams.get('id');

    const { data: Post } = await supabase
        .from('posts')
        .select()
        .eq('post_id', post_id);

    /* Get User ID from Retrieved Post */
    // @ts-ignore
    let user_id = Post[0].user_id;
   
    /* Retrieve User from Database using ID */
    const { data: User } = await supabase
        .from('users')
        .select()
        .eq('user_id', user_id);
    
    /* Repeat above process for Group Information */
    // @ts-ignore
    let group_id = Post[0].group_id;

    const { data: Group } = await supabase
        .from ('groups')
        .select()
        .eq('group_id', group_id);

    let result = {
        Post: Post ?? [],
        User: User ?? [],
        Group: Group ?? []
     }

    return new Response(JSON.stringify({result}));
}


