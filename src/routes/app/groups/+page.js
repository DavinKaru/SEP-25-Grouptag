//src/routes/app/groups/+page.js

export async function load({parent}) {
    const { supabase, session } = await parent()
    const { data: FeaturedGroups} = await supabase.rpc('featured_groups_selector');
    const {data: Images0 } = await supabase.rpc('get_featured_groups_images',{get_group_id: FeaturedGroups[0].group_id})
    const {data: Images1 } = await supabase.rpc('get_featured_groups_images',{get_group_id: FeaturedGroups[1].group_id})
    const {data: Images2 } = await supabase.rpc('get_featured_groups_images',{get_group_id: FeaturedGroups[2].group_id})
    let FeaturedGroupsImages = [Images0, Images1,Images2];

    const { data: AllGroups} = await supabase.rpc('get_all_groups', {amount: 100, startingat: 0});
    const { data: MyGroups} = await supabase.rpc('get_my_groups', {amount: 100, startingat: 0});


    return {
        FeaturedGroups: FeaturedGroups ?? [],
        FeaturedGroupsImages: FeaturedGroupsImages ?? [],
        Groups: AllGroups ?? [],
        MyGroups: MyGroups ?? []
    };
}