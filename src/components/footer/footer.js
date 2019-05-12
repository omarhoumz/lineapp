import React, { Component } from 'react'

import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer border-top border-light">
        <div className="container d-flex flex-sm-row align-items-md-center flex-column justify-content-between py-3">
          <p>
            © 2019 By{' '}
            <a
              className="grey-text text-lighten-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/omhoumz"
            >
              @omarhoumz
            </a>
          </p>
          <p>
            <a className="grey-text" href="mailto://omarhoumz@gmail.com">
              omarhoumz@gmail.com
            </a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
