import React, { Component } from 'react';
import '../LineApp.css';

class Header extends Component {
    render() {
        return (
            <header className="page-header">
                <div className="container">
                    <h1 className="center-align">Welcome to LineApp</h1>
                    <h5 className="center-align">Add your tasks and todos to get organized.</h5>
                </div>
            </header>
        );
    }
}

export default Header;
