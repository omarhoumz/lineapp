import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer transparent">
        <div className="footer-copyright teal">
          <div className="container">
            <p>
              © 2019 By{' '}
              <a
                className="grey-text text-lighten-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/omhoumz"
              >
                @omhoumz
              </a>
              <a
                className="grey-text text-lighten-4 right"
                href="mailto://omarhoumz@gmail.com"
              >
                omarhoumz@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
