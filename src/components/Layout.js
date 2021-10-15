import React from "react";
import "../style/style.css";

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <header>
        <nav>
          <title>{pageTitle}</title>
          <div className="navbar">
            <div className="container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="logo">
                <h1>Yeahhh Buddy!</h1>
              </div>
              <div className="menu-items">
                <li>
                  <a href="#">Hell</a>
                </li>
                <li>
                  <a href="#">Fucking</a>
                </li>
                <li>
                  <a href="#">Yeahhh</a>
                </li>
                <li>
                  <a href="#">Buddy!</a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <address>123 sesame street</address>
      </footer>
    </div>
  );
}
