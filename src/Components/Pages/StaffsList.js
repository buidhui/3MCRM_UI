import React, { Component } from "react";
import StaffList from "../staff/StaffList";
class StaffsList extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Danh sách nhân viên</div>
          </h1>
          <StaffList />
        </section>
      </React.Fragment>
    );
  }
}

export default StaffsList;
