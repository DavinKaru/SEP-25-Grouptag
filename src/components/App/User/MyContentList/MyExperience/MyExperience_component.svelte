<script>
	export let experience;
</script>

<div id="experience-card">
	<!--Card is split into 5 columns.-->

	<!--Column 1: Company Logo-->

	<div id="column1">
		<img src={experience.companyLogo || '/grouptag-g-logo.svg'} alt="Company Logo" />
	</div>

	<!--Column 2: Job Role and Company Name + Location-->
	<div id="column2">
		<h1 id="jobTitle">{experience.jobTitle}</h1>
		<h2 id="jobDetails">{experience.companyName} @ {experience.location}</h2>
	</div>

	<!--Dates subdivision for page organisation-->
	<div id="dates">
		<!--Column 3: Start Date-->
		<div id="column3">
			<p class="month">{experience.startMonth}</p>
			<p class="year">{experience.startYear}</p>
		</div>

		<!--Column 4: Hyphen-->
		<div id="column4">
			<p>-</p>
		</div>

		<!--Column 5: End Date-->
		<div id="column5">
			<p class="month">{experience.endMonth}</p>
			<p class="year">{experience.endYear}</p>
		</div>
	</div>
</div>

<style>
	#experience-card {
		/* Colors */
		background-color: rgba(255, 255, 255, 0.127);

		/* Dimensions */
		margin-top: 10px;
		height: 5rem;
		min-height: 5rem;
		border-radius: 10px 10px 10px 10px; /* Rounded corners on top left and right */

		/* Flexbox layout */
		display: flex;
		align-items: center;
		flex-direction: row;
		padding: 20px;
		gap: 20px;
	}

	#jobTitle {
		font-size: 15px;
		font: 'Poppins', sans-serif;
		text-wrap: nowrap;
	}

	#jobDetails {
		font-size: 8px;
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
		font-size: 12px;
		text-align: center;
		color: #dddddd;
	}

	.year {
		font-size: 8px;
		text-align: center;
		color: #dddddd;
	}

	img {
		width: 2rem;
	}
</style>
