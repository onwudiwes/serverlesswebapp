import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </Link>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to='/' className='navbar-item'>Home</Link>
              <Link to='/about' className='navbar-item'>About</Link>
              <Link to='/items' className="navbar-item">Items</Link>
              <Link to='/admin' className='navbar-item'>Admin</Link>
            </div>
          </div>
        </nav>
    );

}

