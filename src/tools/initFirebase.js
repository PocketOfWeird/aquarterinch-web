import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import settings from './settings';


firebase.initializeApp(settings.firebase);


firebase.auth().getRedirectResult().then(function(result) {
  // The signed-in user info.
  let user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
  // The email of the user's account used.
  let email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  let credential = error.credential;
  // ...
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('user:', firebase.auth().currentUser);
  } else {
    // No user is signed in.
    console.log('user: Not Stored');
  }
});
