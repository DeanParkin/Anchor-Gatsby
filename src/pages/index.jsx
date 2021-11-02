import * as React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

import AnchorHeaderCarousel from "../components/AnchorHeaderCarousel";
import NavBarAnchor from "../components/Nav";

import "../css/style.css";

export default function index() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Yeahhh Buddy!</title>
        <meta http-equiv="Content-Security-Policy" content="script-src 'self'; style-src 'self'"/>
      </Helmet>
      <NavBarAnchor />
      <AnchorHeaderCarousel />
      <Container>
        <h2>Finally Got it Working!!!</h2>
      </Container>
    </div>
  );
}
