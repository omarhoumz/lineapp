import * as firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY, // eslint-disable-line no-undef
  authDomain: process.env.REACT_APP_AUTH_DOMAIN, // eslint-disable-line no-undef
  databaseURL: process.env.REACT_APP_DATABASE_URL, // eslint-disable-line no-undef
  projectId: process.env.REACT_APP_PROJECT_ID, // eslint-disable-line no-undef
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET, // eslint-disable-line no-undef
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERS_ID, // eslint-disable-line no-undef
  appId: process.env.REACT_APP_APP_ID, // eslint-disable-line no-undef
}

firebase.initializeApp(firebaseConfig)

const signInSuccessUrl =
  process.env.NODE_ENV === 'production' // eslint-disable-line no-undef
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
