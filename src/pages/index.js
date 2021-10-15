import * as React from "react";
import Layout from "../components/Layout";
import Test from "../components/Test";
import About from "../components/About";

export default function index() {
  return (
    <div>
      <Layout pageTitle="Yeahhh Buddy!">
        <h2>Katie Fucking Rocks!</h2>
        <p>I'm not trying to hack you!</p>
        <img src="../images/Katie.jpg"></img>
      </Layout>     
    </div>
  )
}
