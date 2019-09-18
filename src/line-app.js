import React from 'react'

import Login from './components/login/login'
import Footer from './sections/footer/footer'
import Header from './sections/header/header'
import Main from './components/main/main'
import Loading from './components/loading/loading'
import authContext from './components/auth-context/auth-context'
import './line-app.css'

const LineApp = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false)

  const firebaseAuth = React.useContext(authContext)

  React.useEffect(() => {
    const unregisterAuthObserver = firebaseAuth.onAuthStateChanged(user => {
      setIsLoading(false)
      setIsUserLoggedIn(!!user)
    })
    return () => unregisterAuthObserver()
  })

  function renderLogin() {
    return <Login />
  }

  function renderLoding() {
    return <Loading />
  }

  if (isLoading) {
    return renderLoding()
  }
  if (!isUserLoggedIn) {
    return renderLogin()
  }

  return (
    <div className="LineApp">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default LineApp
