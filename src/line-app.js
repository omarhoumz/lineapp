import React from 'react'

import { firebase } from './apis/firebase'

import Login from './components/login/login'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Main from './components/main/main'
import { Loading } from './components/loading/loading'
import './line-app.css'

class LineApp extends React.Component {
  constructor() {
    super()

    this.state = {
      isUserLoggedIn: false,
      isLoading: true,
    }
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user =>
        this.setState({ isUserLoggedIn: !!user, isLoading: false })
      )
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  renderLoginWidget = () => {
    return <Login />
  }

  renderLoding = () => {
    return <Loading />
  }

  render() {
    const { isUserLoggedIn, isLoading } = this.state
    const firebaseAuth = firebase.auth()
    const currentUser = firebaseAuth.currentUser

    console.log(firebaseAuth.currentUser && firebaseAuth.currentUser)

    if (isLoading) {
      return this.renderLoding()
    }
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
