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
  // firestoreQueries()
}
window.onload = init

// firestoreQueries = async () => {
//   // get one document
//   const response = await firebase.firestore()
//   .collection('users')
//   .doc('LvQwa20mBPIArX1RYL30').get()
//   const user = getDataFromDoc(response)
//   console.log(user)
//   // get many document
//     const response = await firebase.firestore()
//     .collection('users').where('phones', 'array-contains', '0123')
//     .get()
//     const users = getDataFromDocs(response.docs)
//     console.log(users)
//   // add new document
//   const dataToAdd = {
//     name: 'Nguyen Thi B',
//     age: 20
//   }
//   firebase.firestore().collection('users')
//   .add(dataToAdd)
//   // update document
//     const dataToUpdate = {
//       name: 'abcxyz',
//       address: 'asdasd',
//       phones: firebase.firestore.FieldValue.arrayUnion('')
//     }
//     const docID = "FkuwqKF8yuJtmbcAjj8u"
//     firebase.firestore().collection('users')
//     .doc(docID).update(dataToUpdate)
//   // delete document
//   const docId = 'wTRKk1s4wUmaGrrqCNWe'
//   firebase.firestore().collection('users')
//   .doc(docId).delete()
// }
getDataFromDoc = (res) => {
  const data = res.data()
  data.id = res.id
  return data
}
getDataFromDocs = (docs) => {
  return docs.map(getDataFromDoc)
  // const arr = []
  // for(const oneDoc of docs) {
  //   arr.push(getDataFromDoc(oneDoc))
  // }
  // return arr
}