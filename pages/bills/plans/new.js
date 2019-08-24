import React, { Component } from "react";
import Layout from "./../../../components/Layouts/Layouts";
export default class BillPlanNew extends Component {
  state = {
  };
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Layout title='Bills | Plans'>
        <section style={{ paddingTop: 100 }} className="section-rt">
          New Plans
        </section>
      </Layout>
    );
  }
}