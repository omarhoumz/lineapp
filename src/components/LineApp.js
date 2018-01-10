import React, { Component } from 'react';
import '../LineApp.css';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

class LineApp extends Component {
    render() {
        return (
            <div className="LineApp">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default LineApp;
