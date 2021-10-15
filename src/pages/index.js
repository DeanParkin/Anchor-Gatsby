import * as React from "react";
import Layout from "../components/Layout";
import Katie from "../images/Katie.jpg";

export default function index() {
  return (
    <div>
      <Layout pageTitle="Yeahhh Buddy!">
        <h2>Katie Fucking Rocks!</h2>
        <p>I'm not trying to hack you!</p>
        <img src={Katie} alt="Katie"></img>
      </Layout>     
    </div>
  )
}
