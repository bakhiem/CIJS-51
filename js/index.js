const init = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDrby8Gi_b_cSa7iRtTaTeFyZII9knQqmY",
    authDomain: "chat-app-abc1e.firebaseapp.com",
    databaseURL: "https://chat-app-abc1e.firebaseio.com",
    projectId: "chat-app-abc1e",
    storageBucket: "chat-app-abc1e.appspot.com",
    messagingSenderId: "536039789848",
    appId: "1:536039789848:web:0939e1a0dcde64d17a3a6d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name)
  firebase.auth().onAuthStateChanged((res) => {
    console.log(res)
    if (res) {
      if (res.emailVerified) {
        model.currentUser = {
          displayName: res.displayName,
          email: res.email
        }
        console.log(model.currentUser)
        view.setActiveScreen('chatPage')
      } else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })
}
window.onload = init
