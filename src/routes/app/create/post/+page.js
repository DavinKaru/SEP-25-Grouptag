import {supabase} from '../../../../supabaseClient.js';

export async function load() {

    let user_id = 'f8fe9f2f-2ddb-4c64-945a-6f686a0d614f';
    const myUserId = (await supabase.auth.getSession()).data.session?.user.id
     if (myUserId != null){
         user_id = myUserId;
     }

     console.log(user_id);

     const { data: Groups } = await supabase.rpc('get_user_groups', {get_user_post_id: user_id, amount: 100, startingat: 0});
    
    return {
        Groups: Groups ?? []
    };
}