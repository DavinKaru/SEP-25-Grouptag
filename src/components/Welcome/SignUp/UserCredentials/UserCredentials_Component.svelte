<script> 
	import ButtonsComponent from "../../Buttons/Buttons_Component.svelte";
	import {university, course, fName, lName, dob, bio} from '../../../../routes/welcome/signup/formStore.js';
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import { supabase } from "../../../../supabaseClient";
	let loading = false;
	let email = "";
	let password = "";
	let cPassword = "";
	let errorMessage = "";
	let validations = [];
	let showPassword = false;
	let showCPassword = false;

	function handleSubmit() {
		if (password !== cPassword) {
			errorMessage = "Passwords do not match";
		} else if (!validations.every(validation => validation)) {
			errorMessage = "Password has to contain 8 characters with at least 1 Capital, 1 Number and 1 Symbol";
		} else {
			errorMessage = "";
			handleSignup()
		}
	}

	function validatePassword(e) {
		const vPassword = e.target.value;

		validations = [
			vPassword.length >= 8,
			vPassword.search(/[A-Z]/) > -1,
			vPassword.search(/[0-9]/) > -1,
			vPassword.search(/[$&+,:;=?@#]/) > -1,
		]

		//passwordStr = validations.reduce((acc, cur) => acc + (cur ? 1 : 0), 0)
		
	}
	const handleSignup = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${URL}/auth/callback`,
        data:{
          first_name: $fName,
          last_name: $lName,
          dob: $dob,
          bio: $bio,
          university: $university,
          course: $course
        }
      },
    })
      if (error) throw error
		goto('/welcome/login')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
}
</script>
<form on:submit|preventDefault={handleSubmit}>
	<input type="hidden" name="university" bind:value={$university}/>
	<input type="hidden" name="course" bind:value={$course}/>
	<input type="hidden" name="fName" bind:value={$fName}/>
	<input type="hidden" name="lName" bind:value={$lName}/>
	<input type="hidden" name="dob" bind:value={$dob}/>
	<input type="hidden" name="bio" bind:value={$bio}/>
	<div>
		<div>
			<label for="email">University Email</label>
			<input
				bind:value={email}
				type="email"
				id="email"
				name="email"
				class="input-field"
				placeholder="Enter your University Email here"
				style="margin-bottom: 31px;"
				required
			/>
		</div>

		<div>
			<label for="password">Password</label>
			{#if showPassword}
			<input
				bind:value={password}
				type="text"
				id="password"
				name="password"
				class="input-field"
				placeholder="Enter your password here"
				
				on:input={validatePassword}
				required
			/>
			{:else}
			<input
				bind:value={password}
				type="password"
				id="password"
				name="password"
				class="input-field"
				placeholder="Enter your password here"
				
				on:input={validatePassword}
				required
			/>
			{/if}
			<div class = "password-input-container">
				<input
					type="checkbox"
					bind:checked={showPassword}
					id="showPassword"
					name="showPassword"
					
				/>
				<label for="showPassword">Show Password</label>
			</div>
		</div>
		

		<div style="margin-top: 31px;">
			<label for="cPassword" >Confirm Password</label>
			{#if showCPassword}
			<input
				bind:value={cPassword}
				type="text"
				id="cPassword"
				name="cPassword"
				class="input-field"
				placeholder="Re-enter your password here"
				on:input={validatePassword}
				required
			/>
			{:else}
			<input
				bind:value={cPassword}
				type="password"
				id="cPassword"
				name="cPassword"
				class="input-field"
				placeholder="Re-enter your password here"
				on:input={validatePassword}
				required
			/>
			{/if}
			<div class = "password-input-container">
				<input
					type="checkbox"
					bind:checked={showCPassword}
					id="showCPassword"
					name="showCPassword"
				/>
				<label for="showPassword">Show Password</label>
			</div>
		</div>
		
			
		{#if errorMessage}
			<p style="color: red;">{errorMessage}</p>
		{/if}
	</div>
	<!--//<button type="submit">Submit</button>-->	
	<ButtonsComponent buttonType="submit" text="Next" buttonClass="signup-button" isAnchor={false} />

	
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
		padding: 0 20px; /* 0px on top and bottom, 20px on left and right */
		font-size: 15px;
		background-color: #f4fcff;
		border: none; /* remove the border */
		margin: 8px auto; /* 8px on top and bottom, auto on left and right (Horizontally Centered)*/
		text-align: left;
		box-sizing: border-box; /* make sure the padding is included in the width */
	}

	form > div > div {
		/* Select the divs inside the divs inside the form, which contains label and input element */
		margin: auto; /* Horizontally Centered */
		width: 80%; /* 80% of the parent element */
		text-align: left;
	}

	label
	 {
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

	.password-input-container {
		position: relative;
	}

	#showPassword {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
	}

	#showCPassword {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
	}
</style>
