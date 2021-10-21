import * as React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarAnchor from "../components/Nav";
import "../style/style.css"
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";


export default function index() {
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <html lang="en"/>
          <title>Yeahhh Buddy!</title>
        </Helmet>
      <NavBarAnchor />
      <Container>
        <h2>Finally Got it Working!!!</h2>
      </Container>
    </div>
  );
}
