import React from 'react'
import FirebaseAuth from 'react-firebaseui/FirebaseAuth'

import { firebase, uiConfig } from '../../apis/firebase'
import './login.css'

export default class login extends React.Component {
  render() {
    return <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  }
}
