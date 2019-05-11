import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { displayName, onClickSignOut, imageUrl } = this.props
    return (
      <header className="page-header z-depth-3">
        <div className="container">
          <h1>
            Welcome {displayName ? `${displayName},` : ''} to{' '}
            <strong>LineApp</strong>
          </h1>
          <h5>Add your tasks and todos to get organized.</h5>
          <br />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt={displayName}
                width="48px"
                height="48px"
                style={{
                  marginRight: '1rem',
                }}
                className="circle responsive-img valign"
              />
            )}
            <button
              className="btn waves-effects waves-light btn-flat"
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
