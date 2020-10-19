const model = {}
model.currentUser = {}
model.register = async ({firstName, lastName, email, password}) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    // update profile
    firebase.auth().currentUser.updateProfile({
      displayName: firstName + ' ' + lastName
    })
    // gui email verify
    firebase.auth().currentUser.sendEmailVerification()
    alert('Register success! Please confirm your email')
    view.setActiveScreen('loginPage')
  } catch(err) {
    console.log(err)
    alert(err.message)
  }
}
model.login = async ({email, password}) => {
  try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password)
    // console.log(response)
    // if (response.user.emailVerified) {
    //   view.setActiveScreen('welcomeScreen')
    // } else {
    //   alert('Please verify email')
    // }
  } catch(err) {
    alert(err.message)
    console.log(err)
  }
}
model.addMessage = (message) => {
  const docId = 'AjC7oBeONm1lSiiT8XJm'
  const dataToUpdate = {
    messages: firebase.firestore.FieldValue
    .arrayUnion(message)
  }
  firebase.firestore().collection('conversations').
  doc(docId).update(dataToUpdate)
}
model.getConversations = async () => {
  const response = await firebase.firestore()
  .collection('conversations').
  where('users', 'array-contains', model.currentUser.email).get()
  console.log(getDataFromDocs(response.docs))
}