const components = {}
components.welcomPage = `
<h3>Hello world</h3>
`
components.registerPage = `
<div class="register-container">
<div class="background-img"></div>
<div class="form-wrapper">
  <div class="register-header">MindX Chat</div>
  <form id="register-form">
    <div class="name-wrapper">
      <div class="input-wrapper">
        <input type="text" placeholder="First name" name="firstName">
        <div id="first-name-error" class="err"></div>
      </div>
      <div class="input-wrapper">
        <input type="text" placeholder="Last name" name="lastName">
        <div id="last-name-error" class="err"></div>
      </div>
    </div>
    <div class="input-wrapper">
      <input type="email" placeholder="Email" name="email">
      <div id="email-error" class="err"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" placeholder="Password" name="password">
      <div id="password-error" class="err"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" placeholder="Confirm password" name="confirmPassword">
      <div id="confirm-password-error" class="err"></div>
    </div>
    <div class="register-form-action">
      <div>
        Already have an account?<span class="cursor-pointer" id="redirect-login">Login</span>
      </div>
      <button class="btn" type="submit">Register</button>
    </div>
  </form>
</div>
</div>
`
components.loginPage = `
<div class="login-container">
<div class="background-img"></div>
<div class="form-wrapper">
  <div class="login-header">MindX Chat</div>
  <form id="login-form">
    <div class="input-wrapper">
      <input type="email" placeholder="Email" name="email">
      <div id="email-error" class="err"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" placeholder="Password" name="password">
      <div id="password-error" class="err"></div>
    </div>
    <div class="login-form-action">
      <div>
        Don't have account?<span id="redirect-register" class="cursor-pointer">Register</span>
      </div>
      <button class="btn" type="submit">Login</button>
    </div>
  </form>
</div>
</div>
`