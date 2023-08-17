<script>
	import './style.css';
</script>

<form>
	<div>
		<div>
			<label for="email">University Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				class="input-field"
				placeholder="Enter your university email here"
				style="margin-bottom: 31px;"
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

		<div>
			<label for="confirm-password">Confirm Password:</label>
			<input
				type="password"
				id="password"
				name="password"
				class="input-field"
				placeholder="Enter your password here"
			/>
		</div>
	</div>

	<input type="button" value="Sign Up" class="signup-button" />
</form>