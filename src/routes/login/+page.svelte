<!--<script>
	import './style.css';
	import LoginComponent from '../../components/Login/Login_Component.svelte';
	import BoxComponent from '../../components/Box/Box_Component.svelte';
	import WelcomeComponent from '../../components/Welcome/Welcome_Component.svelte';
</script>

<body>
	<div class="frame">
		<WelcomeComponent />

		<BoxComponent>
			<LoginComponent />
		</BoxComponent>
	</div>
</body>
-->
<script lang="ts">
	import './style.css';
	import { enhance } from '$app/forms'
	import BoxComponent from '../../components/Box/Box_Component.svelte';
	import WelcomeComponent from '../../components/Welcome/Welcome_Component.svelte';
	export let form

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';

	$: {
		const redirectTo = $page.url.searchParams.get('redirect');
		if (browser && $page.data.session) {
			goto(redirectTo ?? '/');
		}
	}

	
</script>

<body>

	<div class="frame">
		<WelcomeComponent />

		<BoxComponent>
			{#if form?.message}
			<div class="block notification is-primary">{form.message}</div>			
			{/if}
			
			<form method="post" use:enhance>
				<div style="margin-top: 42px;">
					<div>
						<label for="email">University Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							class="input-field"
							placeholder="Enter your university email here"
							style="margin-bottom: 31px;"
							value={form?.email ?? ''}
						/>
					</div>
			
					<div>
						<label for="password">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							class="input-field"
							placeholder="Enter your password here"
						/>
					</div>
				</div>
			
				<button class="login-button">Login to your account</button>
			
				<a href="/" class="forgot-password">I forgot my password</a>
			</form>			
		</BoxComponent>
	</div>
</body>