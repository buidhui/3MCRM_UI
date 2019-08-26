import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import WeekChart from "../Chart/WeekChart";
// import MonthChart from "../Chart/MonthChart";
// import YearChart from "../Chart/YearChart";
class DashBoardChart extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-8 col-md-12 col-12 col-sm-12">
          <div className="card ">
            <div className="card-body">
              <div className="card-chart">
                <h4>
                  {" "}
                  <b>Tỉ lệ chuyển đổi các nhóm khách hàng (%)</b>
                </h4>
                <br />
                <Tabs
                  defaultActiveKey="week"
                  transition={false}
                  id="noanim-tab-example"
                >
                  <Tab eventKey="week" className="btn">
                    <br />
                    <WeekChart />
                  </Tab>
                  {/* <Tab eventKey="month" title="Tháng" className="btn">
                    <MonthChart />
                  </Tab>
                  <Tab eventKey="years" title="Năm" className="btn">
                    <YearChart />
                  </Tab> */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoardChart;
