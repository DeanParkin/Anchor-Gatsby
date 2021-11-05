import * as React from "react";
import { Helmet } from "react-helmet";

import AnchorHeaderCarousel from "../components/AnchorHeaderCarousel";
import NavBarAnchor from "../components/Nav";
import About from "../components/About";

import "../css/style.css";

export default function index() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Yeahhh Buddy!</title>
      </Helmet>
      <NavBarAnchor />
      <AnchorHeaderCarousel />
      <About />
    </div>
  );
}
