import * as React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarAnchor from "../components/Nav";
import "../style/style.css"
import { Container } from "react-bootstrap";

document.documentElement.lang = "en";

export default function index() {
  return (
    <div>
      <title>Yeah Buddy!</title>
      <NavBarAnchor />
      <Container>
        <h2>Finally Got it Working!!!</h2>
      </Container>
    </div>
  );
}
