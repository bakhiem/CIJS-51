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
components.chatPage =
  `
<div class="chat-container">
<div class="header">MindX chat</div>
<div class="main">
<div class="aside-left">
<div class="create-conversation">
  <button class="btn cursor-pointer">+ New conversation</button>
</div>
<div class="list-conversations">
</div>
</div>
  <div class="conversation-detail">
    <div class="conversation-title">First conversation</div>
    <div class="list-messages">
    </div>
    <form id="send-message-form">
      <input type="text" placeholder="Type a message" name="message">
      <button class="btn">Send</button>
    </form>
  </div>
</div>
</div>
`
components.createConversationScreen = `
<div class="create-conversation-container">
<div class="header">MindX chat</div>
<form id="create-conversation-form" style="padding: 40px 20%">
  <h3 class="mb-1">Create a new conversation</h3>
  <div class="input-wrapper">
    <input type="text" name="title" placeholder="Conversation name">
    <div id="conversation-title-error" class="err"></div>
  </div>
  <div class="input-wrapper">
    <input type="text" name="email" placeholder="Friend email">
    <div id="conversation-email-error" class="err"></div>
  </div>
  <div class="action">
    <button type="submit" class="btn">Save</button>
    <button id="return-chat" type="button" class="btn btn-light">Cancel</button>
  </div>
</form>
</div>`