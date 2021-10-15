import * as React from "react";
import Layout from "../components/Layout";
import Test from "../components/Test";

export default function index() {
  return (
    <div>
      <p>We gone and fucked it!</p>
      <Layout pageTitle="Yeahhh Buddy!">
        <h2>Yeahhhh Buddy!</h2>
        <p>I'm not trying to hack you!</p>
        <Test />
      </Layout>     
    </div>
  )
}
