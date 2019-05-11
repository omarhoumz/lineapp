import * as firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCpzG1TmwKDmKlBVp-GEU72kxVr2HFBJww',
  authDomain: 'fir-auth-lineapp.firebaseapp.com',
  databaseURL: 'https://fir-auth-lineapp.firebaseio.com',
  projectId: 'fir-auth-lineapp',
  storageBucket: 'fir-auth-lineapp.appspot.com',
  messagingSenderId: '748868350055',
  appId: '1:748868350055:web:3d8537e0cd0cfee7',
}

firebase.initializeApp(firebaseConfig)

const signInSuccessUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://lineapp.netlify.com/'
    : 'localhost:3000'

const uiConfig = {
  signInSuccessUrl,
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: signInSuccessUrl,
  // Privacy policy url/callback.
  privacyPolicyUrl: signInSuccessUrl,
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
}

export { firebase, uiConfig }
