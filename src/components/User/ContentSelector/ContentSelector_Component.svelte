<script>
    import { createEventDispatcher } from 'svelte';

    export let selected = "Experience";

    let experience = true;
    let posts = false;
    let groups = false;
    let mutuals = false;

    const dispatch = createEventDispatcher();
    const submit = () => dispatch('submit', selected);


    /**
	 * @param {string} newSelection
	 */
    function selectContent(newSelection) {

        if(newSelection == "Experience") {
            selected = "Experience";
            experience = true;
            posts = false;
            groups = false;
            mutuals = false;

            submit;
        }   
        else if (newSelection == "Posts") {
            selected = "Posts";
            posts = true;
            experience = false;
            groups = false;
            mutuals = false;

            submit;
        }
        else if (newSelection == "Groups") {
            selected = "Groups";
            groups = true;
            experience = false;
            posts = false;
            mutuals = false;
        }
        else if (newSelection == "Mutuals") {
            selected = "Mutuals";
            mutuals = true;
            experience = false;
            posts = false;
            groups = false;
        }
    }

</script>

<!--Used option elements because they were easier to style. When clicked, calls a function that moves the component's values around,
    which in turn dictates the element's styling, and activates the submit hook call.-->
<div id="contentSelector">
    <option class:selector={experience} on:click={() => selectContent("Experience")} on:click={submit}>Experience</option>
    <option class:selector={posts} on:click={() => selectContent("Posts")} on:click={submit}>Posts</option>
    <option class:selector={groups} on:click={() => selectContent("Groups")} on:click={submit}>Groups</option>
    <option class:selector={mutuals} on:click={() => selectContent("Mutuals")} on:click={submit}>Mutuals</option>
</div>

<style>

    #contentSelector {

        margin-top: 10px;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .selector {
        border-bottom: 2px solid white;
    }

</style>