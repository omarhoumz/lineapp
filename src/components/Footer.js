import React, { Component } from 'react';
import '../LineApp.css';

class Footer extends Component {
  render() {
    return (

        <footer className="page-footer transparent">
            <div className="footer-copyright teal darken-2">
                <div className="container">
                    © 2017 Copyright to <a className="grey-text text-lighten-4" href="https://github.com/omhoumz">@omhoumz</a>
                    <a className="grey-text text-lighten-4 right" href="mailto://omarhoumz@gmail.com">omarhoumz@gmail.com</a>
                </div>
            </div>
        </footer>

    );
  }
}

export default Footer;
