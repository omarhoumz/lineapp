// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app'
import * as firebaseui from 'firebaseui'

// Add the Firebase services that you want to use
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCpzG1TmwKDmKlBVp-GEU72kxVr2HFBJww',
  authDomain: 'fir-auth-lineapp.firebaseapp.com',
  databaseURL: 'https://fir-auth-lineapp.firebaseio.com',
  projectId: 'fir-auth-lineapp',
  storageBucket: 'fir-auth-lineapp.appspot.com',
  messagingSenderId: '748868350055',
  appId: '1:748868350055:web:3d8537e0cd0cfee7',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const signInSuccessUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://lineapp.netlify.com/'
    : 'localhost:3000'

const uiConfig = {
  signInSuccessUrl,
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: signInSuccessUrl,
  // Privacy policy url/callback.
  privacyPolicyUrl: signInSuccessUrl,
}

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth())
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig)

export { firebase }
