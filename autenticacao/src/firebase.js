//create all connection firebase!
import firebase from 'firebase/compat/app'
import 'firebase/compat/database' 
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAjCtynXfx7QTLoaZCYb3KYBD_9PlTzAVE",
    authDomain: "autenticacao-pratica.firebaseapp.com",
    projectId: "autenticacao-pratica",
    storageBucket: "autenticacao-pratica.appspot.com",
    messagingSenderId: "270390894713",
    appId: "1:270390894713:web:b45e791ed19988a53e34a8"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

