<script>
    import AppHeaderComponent from "../../../components/App/AppHeader/AppHeader_Component.svelte";
    import ConnectionRequestComponent from "../../../components/App/ConnectionRequest/ConnectionRequest_Component.svelte";
</script>

<div id="frame">
    <AppHeaderComponent title="Requests" />
    <div id="content">
        <ConnectionRequestComponent />
        <ConnectionRequestComponent />          
        <ConnectionRequestComponent />
        <ConnectionRequestComponent />                             
    </div>
</div>

<style>
    #frame {
		height: 100vh + 65px; /* Extends page height so navbar doesn't block content, cheap trick but it works well enough */
		width: 100vw;
		background-color: #243347;
		background-image: url('/bg10.png');
		background-size: cover;
		background-position: center;

		/* I know flexboxes are dodgy but trust me ;) */
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
	}

    #content {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 65px;
    }
</style>