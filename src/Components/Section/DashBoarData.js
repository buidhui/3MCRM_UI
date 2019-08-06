import React, { Component } from "react";

class DashBoarData extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="card card-sm-4">
              <div class="card-icon bg-primary">
                <i class="ion ion-person" />
              </div>
              <div class="card-wrap">
                <div class="card-header">
                  <h4>Khách hàng</h4>
                </div>
                <div class="card-body">10</div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-3">
            <div class="card card-sm-4">
              <div class="card-icon bg-danger">
                <i class="ion ion-ios-paper-outline" />
              </div>
              <div class="card-wrap">
                <div class="card-header">
                  <h4>Đơn hàng</h4>
                </div>
                <div class="card-body">42</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="card card-sm-4">
              <div class="card-icon bg-warning">
                <i class="ion ion-paper-airplane" />
              </div>
              <div class="card-wrap">
                <div class="card-header">
                  <h4>Giao dịch</h4>
                </div>
                <div class="card-body">1,201</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="card card-sm-4">
              <div class="card-icon bg-dark">
                <i class="ion ion-record" />
              </div>
              <div class="card-wrap">
                <div class="card-header">
                  <h4>Online Users</h4>
                </div>
                <div class="card-body">47</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoarData;
