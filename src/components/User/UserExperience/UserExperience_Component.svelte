<div id="experience-card">
	<!--Card is split into 5 columns.-->

	<!--Column 1: Company Logo-->

	<div id="column1">
		<img src="/grouptag-g-logo.svg" alt="Company Logo" />
	</div>

	<!--Column 2: Job Role and Company Name + Location-->
	<div id="column2">
		<h1 id="jobRole">UI/UX Designer</h1>
		<h2 id="jobDetails">Grouptag @ Melbourne, Australia</h2>
	</div>

    <!--Dates subdivision for page organisation-->
	<div id="dates">

        <!--Column 3: Start Date-->
		<div id="column3">
			<p class="month">MAR</p>
			<p class="year">2023</p>
		</div>

        <!--Column 4: Hyphen-->
		<div id="column4">
			<p>-</p>
		</div>

        <!--Column 5: End Date-->
		<div id="column5">
			<p class="month">NOW</p>
			<p class="year">2023</p>
		</div>
	</div>

</div>

<style>
	#experience-card {
		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		margin-top: 100px;
		width: 85%;
		height: 7%;
		min-height: 75px; /* Force card to render at a minimun of 150 pixels */
		max-width: 850px; /* Prevent any card from getting too big */
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */

		margin-left: auto;
        margin-right: auto;
		padding: 20px;

		/* Flexbox layout */
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 20px;
	}

	#jobRole {
		font-size: 1rem;
		font: 'Poppins', sans-serif;
        text-wrap: nowrap;
	}

	#jobDetails {
		font-size: 0.5rem;
	}

    /* Another flexbox to contain the date values.
       Uses margin-left: auto to push the dates to the right. */
	#dates {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-left: auto;
    }

	.month {
		font-size: 0.75rem;
		text-align: center;
		color: #dddddd;
	}

	.year {
		font-size: 0.5rem;
		text-align: center;
		color: #dddddd;
	}

	img {
		width: 2rem;
	}
</style>
