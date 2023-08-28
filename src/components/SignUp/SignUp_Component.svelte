

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

<style>
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

.signup-button {
    height: 60px;
    width: 257px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    background-color: #CAA2F2;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 8px;
}

form>div>div {
    margin: auto;
    width: 80%;
    text-align: left;
}

label {
    color: #f4fcff;
    font-size: 15px;
    font-weight: bold;
}

@media screen and (max-height: 667px) {
    .box {
        height: calc(100vh - 250px);
    }

    .forgot-password {
        padding: 0px auto;
        margin-bottom: 0px;
    }

    .input-field {
        margin: auto;
    }
}
</style>