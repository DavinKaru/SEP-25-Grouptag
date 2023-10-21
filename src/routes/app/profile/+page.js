//src/routes/app/profile/+page.js

export async function load({url, parent}) {
    const { supabase, session } = await parent()
    let user_id = url.searchParams.get('id')??'';
    if(user_id == ''){
        user_id = session.user.id
    }

    const { data: user  } = await supabase.from('user_courses').select("users(*), university_courses (*), universities (*)").eq('user_id', user_id).single();

    const { data: Users } = await supabase.rpc('get_mutuals', { search_user_id:  user_id});
    const { data: Posts } = await supabase.rpc('get_user_posts', {get_user_post_id: user_id, amount: 100, startingat: 0} );
    const { data: Groups } = await supabase.rpc('get_user_groups', {get_user_post_id: user_id, amount: 100, startingat: 0});
    
    return {
        user: user ?? [],
        Users: Users ?? [],
        Posts: Posts ?? [],
        Groups: Groups ?? []
    };
}



