import React from 'react'
import PropTypes from 'prop-types'

import { About } from '../about/about'
import authContext from '../auth-context/auth-context'
import './header.css'

const Header = () => {
  const {
    currentUser: { displayName, photoURL: imageUrl },
    signOut,
  } = React.useContext(authContext)

  function onClickSignOut() {
    signOut()
  }

  return (
    <header className="page-header border-bottom border-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand header-brand">LineApp</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a> */}
              <button
                type="button"
                className="nav-link btn btn-link about-link"
                data-toggle="modal"
                data-target="#aboutLineApp"
              >
                About
              </button>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={displayName}
                width="32px"
                height="32px"
                style={{
                  marginRight: '0.4rem',
                }}
                className="rounded-circle"
              />
            )}
            {displayName && <h2 className="h6 display-name">{displayName}</h2>}
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={onClickSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      {/* About modal */}
      <About />
    </header>
  )
}

Header.propTypes = {
  displayName: PropTypes.string,
  onClickSignOut: PropTypes.func,
  imageUrl: PropTypes.string,
}

export default Header
