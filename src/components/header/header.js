import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { About } from '../about/about'
import './header.css'

export default class Header extends Component {
  static propTypes = {
    displayName: PropTypes.string,
    onClickSignOut: PropTypes.string,
    imageUrl: PropTypes.string,
  }

  render() {
    const { displayName, onClickSignOut, imageUrl } = this.props

    return (
      <header className="page-header border-bottom border-light">
        <div className="container d-flex flex-sm-row align-items-md-center flex-column justify-content-between py-5">
          <div className="header-brand">
            <h1>
              LineApp
              <button
                type="button"
                className="btn btn-link about-link"
                data-toggle="modal"
                data-target="#aboutLineApp"
              >
                About
              </button>
            </h1>

            <h2 className="h4">
              {displayName ? `${displayName}, ` : ''}Welcome
            </h2>
          </div>
          <div className="header-account">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={displayName}
                width="48px"
                height="48px"
                style={{
                  marginRight: '1rem',
                }}
                className="rounded-circle"
              />
            )}
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={onClickSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
        {/* About modal */}
        <About />
      </header>
    )
  }
}
