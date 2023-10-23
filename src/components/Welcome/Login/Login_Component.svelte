<script>
	import ButtonsComponent from '../Buttons/Buttons_Component.svelte';
	import { enhance} from "$app/forms";
	import { goto } from '$app/navigation';
 

	let email = '';
	let password = '';
	let errorEmail = '';
	let errorPassword = '';

	export let form;

	const validateForm = () => {
		let isValid = true;
		// Validate email
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailPattern.test(email)) {
			errorEmail = 'Please enter a valid university email.';
			isValid = false;
		} else {
			errorEmail = '';
		}
		// Validate password
		if (password.length < 8) {
			//subject to change
			errorPassword = 'Password should be at least 8 characters long.';
			isValid = false;
		} else {
			errorPassword = '';
		}
		return isValid;
	};
</script>

<form id="form" on:submit method="post" action="?/login" 
	use:enhance={({ formElement, formData, action, cancel, submitter }) => {
	// `formElement` is this `<form>` element
	// `formData` is its `FormData` object that's about to be submitted
	// `action` is the URL to which the form is posted
	// calling `cancel()` will prevent the submission
	// `submitter` is the `HTMLElement` that caused the form to be submitted
	if(!validateForm()){
		cancel();
	}
	return async({result, update}) =>{
		console.log(result)
		if(result.status == 200){
			goto('/app/profile')
		}
	};
}}>
{#if (form?.success == false)} <span class="error-msg">{form.message}</span> {/if}	
	<div style="margin-top: 42px;">
		<div style="margin-bottom: 31px;">
			<label for="email">University Email</label>
			<input
				bind:value={email}
				type="email"
				id="email"
				name="email"
				class="input-field"
				placeholder="Enter your email here"
			/>
			<span class="error-msg">{errorEmail}</span>
		</div>

		<div>
			<label for="password">Password</label>
			<input
				bind:value={password}
				type="password"
				id="password"
				name="password"
				class="input-field"
				placeholder="Enter your password here"
			/>
			<span class="error-msg">{errorPassword}</span>
		</div>
	</div>

	<!--
		How do you submit form data using anchors?
		<ButtonsComponent text="Login" buttonClass="login-button" />
			<input class="button login-button"type="submit" value="Login"/>
	
	-->
	<ButtonsComponent buttonType="submit" text="Login" buttonClass="login-button" isAnchor={false}/>
	
	
</form>

<a href="/" class="forgot-password">I forgot my password</a>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.error-msg {
		color: #e87e7e;
		font-size: 10px;
		font-weight: bold;
		text-align: center;
		margin: 3px 0 0;
		padding: 0px;
		display: block;
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

	.forgot-password {
		display: block; /* display the link as a block element */
		font-size: 10px;
		font-weight: bold;
		text-align: center;
		text-decoration: none; /* remove the underline */
		color: #45c2e2;
		margin-bottom: 30px;
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
