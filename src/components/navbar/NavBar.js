import React from 'react'
import './NavBar.css';
import logo from './logo-white.svg';
function NavBar() {
    return (
        <div>
        <nav className="navbar">
        <div className="brand-title">
          <div className="brand-logo">
            <a href="/">
                <img
                  src={logo}
                  alt="logo"
                />
            </a>
            <p className="website-name">| Developers</p>
          </div>
        </div>
        <div className="navbar-links">
        
          <ul>
          <li className="btn">
              <a href="/contact">Why Marvel </a>
            </li>
            <li className="btn">
              <a href="/contact">Enterprice</a>
            </li>
            <li className="btn">
              <a href="/contact">Pricing</a>
            </li>
            <li className="btn">
              <a href="/signin">Sign in</a>
            </li>
            <li className="btn">
              <a href="/register" className="signup">
                Sign Up free
              </a>
            </li>
          </ul>
        </div>
        
        <div className="small-menu">
        <div className="icon"> ≡ </div>
        <div className="hidden-list">
          <ul>
            <li><a href="/">-</a></li>
            <li><a href="/">Enterprice</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Sign in</a></li>
            <li><a href="/">Sign Up free</a></li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
    )
}

export default NavBar;
