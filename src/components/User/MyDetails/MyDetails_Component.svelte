<div id="details">
	<div id="grid">
		<img src="/profile/course.svg" alt="Course" />
		<p class="courseInfo">Bachelor of Computer Science</p>
		<img src="/profile/university.svg" alt="Course" />
		<p class="courseInfo">Swinburne University of Technology</p>
		<img src="/profile/location-flag.svg" alt="Course" />
		<p class="courseInfo">Melbourne, Australia</p>
	</div>
	<p id="bio">
		Man, my life is so interesting. I bet you couldn't predict a single thing about my life.
	</p>
</div>

<style>
	#details {
		display: flex;
		flex-direction: column;
		gap: 10px;

        background-color: rgba(255, 255, 255, 0.127);
        padding: 15px;
        border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */
	}

	#grid {
		display: grid;
		grid-template-columns: 0.05fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 10px;
	}

	.courseInfo {
		font-size: 12px;
		color: white;
	}

    img {
        width: 15px;
    }

	#bio {
		font-size: 12px;
		color: white;
	}

	/* Tablet + PC Layout */
	@media only screen and (min-width: 600px) { 
		#details {
			height: 100%;
			justify-content: center;
			padding: 20px;
		}
	}
</style>