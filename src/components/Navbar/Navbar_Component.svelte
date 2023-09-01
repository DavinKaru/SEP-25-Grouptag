<!-- Navbar Component -->

<nav class="navbar">
	<button>
		<img src="/Icons/Navbar Icons/Home.svg" alt="Home Icon" class="navIcon" />
	</button>
	<button>
		<img src="/Icons/Navbar Icons/Chat.svg" alt="Chat Icon" class="navIcon" />
	</button>

	<div class="plusButton">
		<img src="/Icons/Navbar Icons/Plus.svg" alt="Plus Icon" class="plusIcon" />
	</div>

	<button>
		<img src="/Icons/Navbar Icons/Notification.svg" alt="Notification Icon" class="navIcon" />
	</button>
	<button>
		<img src="/Icons/Navbar Icons/Profile.svg" alt="Profile Icon" class="navIcon" />
	</button>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;

		position: fixed;
		bottom: 2.5%;
		left: 15.5%; /* Centering the navbar (100% - 69%) / 2 */
		width: 69%;
		height: 4.72vh; /* (4.72% of viewport) */

		border-radius: 50px;
		padding: 0 5%;

		backdrop-filter: blur(10px); /* Adding blur */
		background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white background */
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); /* Drop shadow */
	}

	.navbar button {
		cursor: pointer;
		border: none;
		background: none;
		padding: 0%;
	}

	.navIcon {
		height: 2.41vh;
		width: 2.41vh;
		vertical-align: middle; /* Add this line */
	}

	.plusButton {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 3vh; /* Adjust font size if needed */
		border-radius: 50%;
		color: #ffffff !important;
		background-color: #2673ff !important;
		height: calc(4.72vh * 1.58); /* 158% of the navbar's height */
		width: calc(4.72vh * 1.58); /* 158% of the navbar's width */
		border: 3px solid #11172d !important;
	}

	.separator {
		margin: 0%;
	}
</style>
