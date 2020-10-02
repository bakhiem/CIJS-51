const view = {}
view.setActiveScreen = (screenName) => {
  switch(screenName) {
    case 'welcomeScreen':
      document.getElementById('app').innerHTML 
      = components.welcomPage
    break
    case 'registerPage':
      document.getElementById('app').innerHTML
      = components.registerPage
    break
  }
}