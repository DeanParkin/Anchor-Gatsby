import React from 'react'
import Anchor-Nav-Logo from "../imges/anchor-nav-logo.png"

export default function Nav() {
    return (
        <div>
            <nav id="navbarSite" role="navigation" class="navbar navbar-expand-lg fixed-top shadow">
                <a class="navbar-brand" href=".">
                    <h1>
                        <span class="hide" hidden="">The Anchor</span>
                    </h1>
                    <img src={Anchor-Nav-Logo} alt="The Anchor Logo Home" class="" style="">
                </a><!--      Navbar Brand-->
                <button class="navbar-toggler navbar-light" id="hamburger" type="button" data-toggle="collapse" data-target="#myToggleNav" aria-controls="myToggleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="nav-icon">
                        <div></div>
                    </div>
                </button><!--hamburger menu button-->
                <div class="collapse navbar-collapse" id="myToggleNav">
                    <ul class="navbar-nav justify-content-center">
                        <li class="nav-item"><a href="#pageTop" class="nav-link">HOME</a></li>
                        <li class="nav-item"><a href="#covidSection" class="nav-link">COVID-19</a></li>
                        <li class="nav-item"><a href="#beerSection" class="nav-link">DRINKS</a></li>
                        <li class="nav-item"><a href="#gallerySection" class="nav-link">GALLERY</a></li>
                        <li class="nav-item"><a href="#contactForm" class="nav-link ">CONTACT</a></li>
                    </ul><!--Nav Menu-->
                </div><!--Collaspse-->
            </nav>
        </div>
    )
}
