const view = {}
view.setActiveScreen = (screenName, fromCreate = false) => {
  switch(screenName) {
    case 'welcomeScreen':
      document.getElementById('app').innerHTML 
      = components.welcomPage
    break
    case 'registerPage':
      document.getElementById('app').innerHTML
      = components.registerPage
      document.getElementById('redirect-login')
      .addEventListener('click', () => {
        view.setActiveScreen('loginPage')
      })
      const registerForm = document.getElementById('register-form')
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const dataRegister= {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        controller.register(dataRegister)
      })
    break
    case 'loginPage':
      document.getElementById('app').innerHTML
      = components.loginPage
      document.getElementById('redirect-register')
      .addEventListener('click', () => {
        view.setActiveScreen('registerPage')
      })
      const loginForm = document.getElementById('login-form')
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const dataToLogin = {
          email: loginForm.email.value, 
          password: loginForm.password.value
        }
        controller.login(dataToLogin)
      })
    break
    case 'chatPage': 
      document.getElementById('app').innerHTML = components.chatPage
      const sendMessageForm = document.getElementById('send-message-form')
      sendMessageForm.addEventListener('submit',(e) => {
        e.preventDefault()  
        const message = sendMessageForm.message.value
        const messageSend = {
          owner: model.currentUser.email,
          content: message,
          createdAt: new Date().toISOString()
        }
        if(message.trim() !== '') {
          model.addMessage(messageSend)
          sendMessageForm.message.value = ''
        }
      })
      if(!fromCreate) {
        // lay cac cuoc hoi thoai ve
        model.getConversations()
        // lang nghe thay doi cua cac cuoc hoi thoai
        model.listenConversationChange()
      } else {
        view.showCurrentConversation()
        view.showListConversation()
      }
      document.querySelector('.create-conversation button')
      .addEventListener('click', () => {
        view.setActiveScreen('createConversationScreen')
      })
      const addUserForm = document.getElementById('add-user-form')
      addUserForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = addUserForm.email.value
        if(email !== '') {
          model.addUser(email)
        }
        addUserForm.email.value = ''
      })
    break
    case 'createConversationScreen' :
      document.getElementById('app').innerHTML = 
      components.createConversationScreen
      document.querySelector('#return-chat')
      .addEventListener('click', () => {
        view.setActiveScreen('chatPage', true)
      })
      const createConversationForm = 
      document.querySelector('#create-conversation-form')
      createConversationForm.addEventListener('submit',(e) => {
        e.preventDefault()
        const data = {
          title: createConversationForm.title.value,
          email: createConversationForm.email.value
        }
        controller.createConversation(data)
      })
    break
  }
}
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}
view.addMessage = (message) => {
  const messageWrapper = document.createElement('div')
  messageWrapper.classList.add('message')
  if(model.currentUser.email === message.owner) {
    messageWrapper.classList.add('message-mine')
    messageWrapper.innerHTML = `
    <div class="message-content">${message.content}</div>
    `
  } else {
    messageWrapper.classList.add('message-other')
    messageWrapper.innerHTML = `
    <div class="owner">${message.owner}</div>
    <div class="message-content">${message.content}</div>
    `
  }
  document.querySelector('.list-messages').appendChild(messageWrapper)
}
// <div class="message message-mine "> 
//    <div class="message-content">ahihi</div>
// </div>

view.showCurrentConversation = () => {
  document.querySelector('.list-messages').innerHTML = ''
  document.querySelector('.list-users').innerHTML = ''
  document.querySelector('.conversation-title').innerHTML
   = model.currentConversation.title
  for(const oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage)
  }
  for(const user of model.currentConversation.users) {
    view.addUser(user)
  }
  view.scrollToEndElm()
}

view.showListConversation = () => {
  for(const conversation of model.conversations) {
    view.addConversation(conversation)
  }
}
view.addConversation = (conversation) => {
  // tao the div
  const conversationWrapper = document.createElement('div')
  // them class
  conversationWrapper.classList.add('conversation')
  conversationWrapper.id = conversation.id
  if(conversation.id === model.currentConversation.id) {
    conversationWrapper.classList.add('current')
  }
  // sua innerHtml
  conversationWrapper.innerHTML = `
    <div class="left-conversation-title">
      ${conversation.title}
    </div>
    <div class="num-of-user">
      ${conversation.users.length} users
    </div>
    <div class="notification"></div>
  `
  // them len tren giao dien
  document
  .querySelector('.list-conversations')
  .appendChild(conversationWrapper)
  // console.log(conversationWrapper)
  conversationWrapper.addEventListener('click', () => {
    // xoa current class cu
    const current = document.querySelector('.current')
    current.classList.remove('current')
    // them current vao cai duoc click
    conversationWrapper.classList.add('current')
    // show conversation duoc click len man hinh
    for(const elm of model.conversations) {
      if(elm.id === conversation.id) {
        model.currentConversation = elm
        view.showCurrentConversation()
      }
    }
    view.hideNotification(conversation.id)
  })
}
view.scrollToEndElm = () => {
  const elm = document.querySelector('.list-messages')
  elm.scrollTop = elm.scrollHeight
}
view.addUser = (user) => {
  const userElement = document.createElement('div')
  // userElement = <div></div>
  userElement.classList.add('user')
  // userElement = <div class="user"></div>
  userElement.innerText = user
  // userElement = <div class="user">khiemnb2705@gmail.com</div>
  document.querySelector('.list-users')
  .appendChild(userElement)
}
view.showNotification = (id) => {
  const conversationElement = document.getElementById(id)
  // conversationElement.lastElementChild.style = 'display: block'
  conversationElement.querySelector('.notification').style = 'display: block'
}
view.hideNotification = (id) => {
  const conversationElement = document.getElementById(id)
  conversationElement.querySelector('.notification').style = 'display: none'
}