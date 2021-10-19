import * as React from "react";
import Layout from "../components/Layout";
import Katie from "../images/Katie.jpg";
import Test from "../components/Test"

export default function index() {
  return (
    <div>
      <Layout pageTitle="Yeahhh Buddy!">
        <h2>Katie Fucking Rocks!</h2>
        <p>I'm not trying to hack you!</p>
        <p>Lets get the Cocky T's going!</p>
        <Test />
        <img src={Katie} alt="Katie"></img>
      </Layout>
    </div>
  )
}
