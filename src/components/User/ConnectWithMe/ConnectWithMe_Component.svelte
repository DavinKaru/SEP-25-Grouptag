<div id="userConnectGrid">
	<img class="connectIcon" src="/profile/Connect.svg" alt="Connect with me" />
	<img class="connectIcon" src="/profile/Chat.svg" alt="Chat with me" />
	<img class="connectIcon" src="/profile/Share.svg" alt="Share my Profile" />
	<p class="connectOption">Connect</p>
	<p class="connectOption">Chat</p>
	<p class="connectOption">Share</p>
</div>

<style>
	/* This one was a pain. Took some manual fiddling with the margin attributes.
        Chose a grid and I needed something more precise then flexbox .*/
	#userConnectGrid {
		/* Box container */
		background-color: rgba(255, 255, 255, 0.127);
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
		margin-top: 10px;

		/* Grid settings */
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
	}

    /* Img settings */
	.connectIcon {
		margin-top: 15px;
		margin-bottom: -5px;
		width: 30px;
		margin-left: auto;
		margin-right: auto;
	}

    /* Text settings */
	.connectOption {
		font-size: 14px;
		color: white;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;
	}
</style>
