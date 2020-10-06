const model = {}
model.register = async ({firstName, lastName, email, password}) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    // update profile
    firebase.auth().currentUser.updateProfile({
      displayName: firstName + ' ' + lastName
    })
    // gui email verify
    firebase.auth().currentUser.sendEmailVerification()
  } catch(err) {
    console.log(err)
    alert(err.message)
  }
}