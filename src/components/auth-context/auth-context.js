import React from 'react'
import { firebase } from '../../apis/firebase'

const firebaseAuth = firebase.auth()

const authContext = React.createContext(firebaseAuth)

export default authContext
