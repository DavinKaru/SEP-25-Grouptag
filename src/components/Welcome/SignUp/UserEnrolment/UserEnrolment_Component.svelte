<script>
	import ButtonsComponent from '../../Buttons/Buttons_Component.svelte';
	import { university, course } from '../../../../routes/welcome/signup/formStore.js';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { supabase } from '../../../../supabaseClient';
	let loading = false;
	let errUni, errCou;

	const handleNext = async () => {
    try {
		errUni="";
		errCou="";
      loading = true
	  const {data: result, error: err} = await supabase.rpc("check_uni_and_course", {uni: $university, cou: $course})
	   if (!result[0].university){
		errUni="Please enter a valid University";

	   }
	   if (!result[0].course){
		errCou="This course is not valid at this University";

	   } 
	//   // insert some extra javascript checks here
	//   ///
	//   //
	//   //
    //   //if (error) throw error
	  if(result[0].university && result[0].course){

		goto('/welcome/signup/details');
	  }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }

</script>

<form method="post" on:submit|preventDefault={handleNext}>
	<div>
		<div>
			{#if errUni != null}<span>{errUni}</span><br>{/if}
			<label for="university">University Name</label>
			<input
				bind:value={$university}
				type="text"
				id="university"
				name="university"
				class="input-field"
				placeholder="Enter your university's name here"
				style="margin-bottom: 31px;"
				required
			/>
		</div>
		<div>
			{#if errCou != null}<span>{errCou}</span><br>{/if}
			<label for="course">Course Name</label> 
			<input
				bind:value={$course}
				type="text"
				id="course"
				name="course"
				class="input-field"
				placeholder="Enter your course name here"
				required
			/>
		</div>
	</div>

	<ButtonsComponent text="Next" buttonClass="signup-button" buttonType="submit" isAnchor={false}/>
</form>

<style>
	/* Reset browser default */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.input-field {
		height: 60px;
		width: 100%;
		border-radius: 10px;
		padding: 0 20px;
		font-size: 15px;
		background-color: #f4fcff;
		border: none;
		margin: 8px auto;
		text-align: left;
		box-sizing: border-box;
	}

	form > div > div {
		margin: auto;
		width: 80%;
		text-align: left;
	}

	label {
		color: #f4fcff;
		font-size: 15px;
		font-weight: bold;
	}

	/* If screen's height is smaller than that of the required value to display 
		the form's input fields, adjust their height so they can fit on the screen. */
	@media screen and (max-height: 750px) {
		.input-field {
			height: 6.5vh;
		}
	}
</style>
