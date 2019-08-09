import React, { Component } from "react";

import DashBoarData from "../Section/DashBoarData";
import DashBoardChart from "../Section/DashBoardChart";
import DashBoardTopNv from "../Section/DashBoardTopNv";

class TongQuan extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Tổng quan</div>
          </h1>
          <DashBoarData />

          <div className="row">
            <DashBoardChart />
            <DashBoardTopNv/>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default TongQuan;
