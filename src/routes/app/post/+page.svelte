<script>
    import PostComponent from "../../../components/Post/Post_Component.svelte";
	export let data;
</script>

<body>
	<div class="frame">
        <PostComponent {data}/>
	</div>
</body>

<style>
	.frame {
		height: 100vh;
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
		overflow: auto;
	}
</style>