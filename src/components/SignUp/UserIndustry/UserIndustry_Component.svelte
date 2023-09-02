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
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
			/>
		</div>
		<div class="column">
			<CircleIconComponent
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
			/>
		</div>
		<div class="column">
			<CircleIconComponent
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
			/>
			<CircleIconComponent
				icon1="/Icons/Industry Icons/TechOn.svg"
                icon2="/Icons/Industry Icons/TechOff.svg"
				alt="Tech Industry Icon"
				name="Tech"
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
