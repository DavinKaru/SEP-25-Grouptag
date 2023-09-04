<script>
	import CircleIconComponent from '../../CircleIcon/CircleIcon_Component.svelte';
	import ButtonsComponent from '../../Buttons/Buttons_Component.svelte';
</script>

<div id="body">
	<h2 id="heading">Choose Your Industries</h2>
	<div class="grid">
		<div class="column">
			<CircleIconComponent
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/EngineeringOn.svg"
                icon2="/Icons/Industry Icons/EngineeringOff.svg"
				alt="Engineering Industry Icon"
				name="Engineering"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/ScienceOn.svg"
                icon2="/Icons/Industry Icons/ScienceOff.svg"
				alt="Science Industry Icon"
				name="Science"
			/>
		</div>
		<div class="column">
			<CircleIconComponent
				icon1="/Icons/Industry Icons/MedicalOn.svg"
                icon2="/Icons/Industry Icons/MedicalOff.svg"
				alt="Medical Industry Icon"
				name="Medical"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/BusinessOn.svg"
                icon2="/Icons/Industry Icons/BusinessOff.svg"
				alt="Business Industry Icon"
				name="Business"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/LawOn.svg"
                icon2="/Icons/Industry Icons/LawOff.svg"
				alt="Law Industry Icon"
				name="Law"
			/>
		</div>
		<div class="column">
			<CircleIconComponent
				icon1="/Icons/Industry Icons/PoliticsOn.svg"
                icon2="/Icons/Industry Icons/PoliticsOff.svg"
				alt="Politics Industry Icon"
				name="Politics"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/EducationOn.svg"
                icon2="/Icons/Industry Icons/EducationOff.svg"
				alt="Education Industry Icon"
				name="Education"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/ArtsOn.svg"
                icon2="/Icons/Industry Icons/ArtsOff.svg"
				alt="Arts Industry Icon"
				name="Arts"
			/>
		</div>
	</div>

	<ButtonsComponent text="Next" buttonClass="signup-button" href="/welcome/signup/details" />
</div>

<style>
	#heading {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 2rem;
		display: flex;
	}
</style>
