import React from 'react';

const Header = () => (
    <nav className="navbar navbar-expand-md bg-white navbar-light shadow-sm">
        <a className="navbar-brand text-primary" href="/">Creative Labs</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
);
export default Header;