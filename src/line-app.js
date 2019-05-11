import React from 'react'

import { firebase } from './apis/firebase'

import Login from './components/login/login'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Main from './components/main/main'
import './LineApp.css'

class LineApp extends React.Component {
  constructor() {
    super()

    this.state = {
      isUserLoggedIn: false,
    }
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isUserLoggedIn: !!user }))
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  setUserLogginStatus = status => {
    this.setState({
      isUserLoggedIn: status,
    })
  }

  renderLoginWidget = () => {
    return <Login />
  }

  render() {
    const { isUserLoggedIn } = this.state
    const firebaseAuth = firebase.auth()
    const currentUser = firebaseAuth.currentUser

    console.log(firebaseAuth.currentUser && firebaseAuth.currentUser)

    if (!isUserLoggedIn) {
      return this.renderLoginWidget()
    }
    return (
      <div className="LineApp">
        <Header
          displayName={currentUser.displayName}
          imageUrl={currentUser.photoURL}
          onClickSignOut={() => firebaseAuth.signOut()}
        />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default LineApp
