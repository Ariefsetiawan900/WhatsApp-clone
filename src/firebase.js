// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvolIdr1f9eyj6TbZ-MsBcGSKVjz_6obg",
    authDomain: "whattsappclone2020.firebaseapp.com",
    projectId: "whattsappclone2020",
    storageBucket: "whattsappclone2020.appspot.com",
    messagingSenderId: "907034545456",
    appId: "1:907034545456:web:6bae6c712d9a2a6c7b4cf5",
    measurementId: "G-66HT0Y1PHR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db =firebaseApp.fireStore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db;