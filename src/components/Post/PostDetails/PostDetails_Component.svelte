<script>
// @ts-nocheck

    import ProfileIconComponent from "../../User/ProfileIcon/ProfileIcon_component.svelte";
    import GroupIconComponent from "../../Icons/GroupIcon/GroupIcon_Component.svelte";
    import TagIconComponent from "../../TagIcons/TagIcon_Component.svelte";

    export let postTitle;
    export let postAuthorName;
    export let postGroupName;
    export let postGroupLogo;
    export let postTags;

</script>

<div id="post-details">
    <h1 id="post-title">{postTitle}</h1>
    <div id="post-author">
        <ProfileIconComponent --width='25px'/>
        <h2 id="author-name">{postAuthorName}</h2>
    </div>
    <div id="post-group">
        <GroupIconComponent {postGroupLogo}/>
        <h2 id="group-name">{postGroupName}</h2>
    </div>
    <div id="post-tags">
        {#each postTags as tag}
            <TagIconComponent text={tag.name}/>
        {/each}
    </div>
</div>

<style>

    #post-details {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
    
    }

    #post-author, #post-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }


    #post-tags {
        margin-top: 3px;
        display: flex;
        gap: 5px;
    }

    #post-title {
        font-size: 28px;
    }

    #post-author {
        font-size: 8px;
    }

    #group-name {
        font-size: 12px;
    }

</style>