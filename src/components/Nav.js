import React from 'react'
import "../style/anchorNav.css"
import AnchorNavLogo from "../imges/anchor-nav-logo.png"


export default function Nav() {
    return (
        <div>
            <nav id="navbarSite" role="navigation" className="navbar navbar-expand-lg fixed-top shadow">
                <a className="navbar-brand" href=".">
                    <h1>
                        <span className="hide" hidden="">The Anchor</span>
                    </h1>
                    <img src={AnchorNavLogo} alt="The Anchor Logo Home"/>
                </a>{/*Nav Brand*/}
                <button className="navbar-toggler navbar-light" id="hamburger" type="button" data-toggle="collapse" data-target="#myToggleNav" aria-controls="myToggleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="nav-icon">
                        <div></div>
                    </div>
                </button>{/*Hamburger Menu Button*/}
                <div className="collapse navbar-collapse" id="myToggleNav">
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item"><a href="#pageTop" className="nav-link">HOME</a></li>
                        <li className="nav-item"><a href="#covidSection" className="nav-link">COVID-19</a></li>
                        <li className="nav-item"><a href="#beerSection" className="nav-link">DRINKS</a></li>
                        <li className="nav-item"><a href="#gallerySection" className="nav-link">GALLERY</a></li>
                        <li className="nav-item"><a href="#contactForm" className="nav-link ">CONTACT</a></li>
                    </ul>{/*Nav Menu*/}
                </div>{/*Collapse Menu*/}
            </nav>
        </div>
    )
}
