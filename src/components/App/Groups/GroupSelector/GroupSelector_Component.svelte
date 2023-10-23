<script>
    export let allGroups = true;
    let myGroups = false;

    /**
	 * @param {string} newSelection
	 */
    function selectContent(newSelection) {

        if(newSelection == "AllGroups") {
            allGroups = true;
            myGroups = false;
         }   
        else if (newSelection == "MyGroups") {
            allGroups = false;
            myGroups = true;

        }
    }

</script>

<!--Used option elements because they were easier to style. When clicked, calls a function that moves the component's values around,
    which in turn dictates the element's styling.-->
<div id="contentSelector">
    <option class:selector={allGroups} on:click={() => selectContent("AllGroups")}>All Groups</option>
    <option class:selector={myGroups} on:click={() => selectContent("MyGroups")}>My Groups</option>
</div>

<style>

    #contentSelector {

        margin-top: 10px;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    option {
        color:rgb(215, 215, 213);

    }

    .selector {
        border-bottom: 2px solid white;
        color: white;
    }

</style>