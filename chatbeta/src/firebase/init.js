import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBfCRtzGlBjVo86jZnrZfB1VwJu7tidixQ",
    authDomain: "chat-4df1e.firebaseapp.com",
    databaseURL: "https://chat-4df1e.firebaseio.com",
    projectId: "chat-4df1e",
    storageBucket: "chat-4df1e.appspot.com",
    messagingSenderId: "426352782035",
    appId: "1:426352782035:web:ee437fa5e495e056448226",
    measurementId: "G-73E5LLXGGR"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots : true });

  export default firebaseApp.firestore();