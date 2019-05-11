import React, { Component } from 'react'

import './header.css'

export default class Header extends Component {
  render() {
    const { displayName, onClickSignOut, imageUrl } = this.props

    return (
      <header className="page-header border-bottom border-light">
        <div className="container d-flex flex-sm-row align-items-md-center flex-column justify-content-between py-5">
          <div className="header-brand">
            <h1>LineApp</h1>
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
      </header>
    )
  }
}
