// @ts-nocheck
//src/routes/app/post/+page.js
import { supabase } from '../../../supabaseClient.js';
import { goto } from '$app/navigation';

export async function load({url}) {

    let user_id = 'f8fe9f2f-2ddb-4c64-945a-6f686a0d614f';
    const myUserId = (await supabase.auth.getSession()).data.session?.user.id
     if (myUserId != null){
         user_id = myUserId;
     }

    let urlString = url.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    let params = queryString.get('id')
    let post_id = '629b17cf-b958-4ebb-879c-03622894d677';
    if(params != ''){
        post_id = params;
    }else{
        goto('/app/myprofile')
    }
    const { data: Posts } = await supabase.rpc('get_post', {get_post_id: post_id});
    const { data: Comments } = await supabase.rpc('get_comments', {get_post_id: post_id});
    const { data: User  } = await supabase.from('users').select("*").eq('user_id', user_id).single();

    return {
        Post_id: post_id,
        Posts: Posts[0] ?? [],
        Comments: Comments ?? [],
        User: User ?? []
    };
}

