//src/routes/app/post/+page.js

export async function load({url, parent}) {
    const { supabase, session } = await parent()
    //const post_id = url.searchParams.get('id')??'';
    const post_id = '629b17cf-b958-4ebb-879c-03622894d677';
    const { data: Posts } = await supabase.rpc('get_post', {get_post_id: post_id});
    const { data: Comments } = await supabase.rpc('get_comments', {get_post_id: post_id});

    return {
        Posts: Posts[0] ?? [],
        Comments: Comments ?? []
    };
}

