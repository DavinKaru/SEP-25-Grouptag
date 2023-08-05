<script>
    import "./style.css";
</script>

<div class="signup">
    <form>
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

        <input
            type="button"
            value="Login to your account"
            class="login-button"
        />

        <a href="/" class="forgot-password">I forgot my password</a>
    </form>
</div>
