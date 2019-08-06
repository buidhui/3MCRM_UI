import React, { Component } from "react";

class DashBoarData extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-sm-4">
              <div className="card-icon bg-primary">
                <i className="ion ion-person" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Khách hàng</h4>
                </div>
                <div className="card-body">10</div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-sm-4">
              <div className="card-icon bg-danger">
                <i className="ion ion-ios-paper-outline" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Đơn hàng</h4>
                </div>
                <div className="card-body">42</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-sm-4">
              <div className="card-icon bg-warning">
                <i className="ion ion-paper-airplane" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Giao dịch</h4>
                </div>
                <div className="card-body">1,201</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-sm-4">
              <div className="card-icon bg-dark">
                <i className="ion ion-record" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Online Users</h4>
                </div>
                <div className="card-body">47</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoarData;
