import React from 'react'

import { firebase } from './apis/firebase'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './LineApp.css'

class LineApp extends React.Component {
  constructor() {
    super()

    this.state = {
      isUserLoggedIn: false,
    }
  }
  componentDidMount() {
    if (firebase) {
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
    }
  }

  setUserLogginStatus = status => {
    this.setState({
      isUserLoggedIn: status,
    })
  }

  onAuthStateChanged = user => {
    if (user) {
      this.setUserLogginStatus(true)
      console.log('User is signed in.', user)
    } else {
      this.setUserLogginStatus(false)
      console.log('No user is signed in.')
    }
  }

  render() {
    return (
      <div className="LineApp">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default LineApp
