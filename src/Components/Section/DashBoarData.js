import React, { Component } from "react";
import Axios from "axios";
import url from "../url";

class DashBoarData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statistics: []
    };
  }

  componentDidMount() {
    Axios({
      method: "get",
      url: `${url}/statistics`
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          statistics: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var { statistics } = this.state;
    // function formatMoney(
    //   amount,
    //   decimalCount = 2,
    //   decimal = "",
    //   thousands = ","
    // ) {
    //   try {
    //     decimalCount = Math.abs(decimalCount);
    //     decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    //     const negativeSign = amount < 0 ? "-" : "";

    //     let i = parseInt(
    //       (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    //     ).toString();
    //     let j = i.length > 3 ? i.length % 3 : 0;

    //     return (
    //       negativeSign +
    //       (j ? i.substr(0, j) + thousands : "") +
    //       i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
    //       (decimalCount
    //         ? decimal +
    //           Math.abs(amount - i)
    //             .toFixed(decimalCount)
    //             .slice(4)
    //         : "")
    //     );
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // var result = formatMoney(statistics.revenue);
    var back = Math.ceil(statistics.back);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-sm-4">
              <div className="card-icon bg-primary">
                <i className="fas fa-users" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>KH đầu mối</h4>
                </div>
                <div className="card-body">
                  <small>{statistics.totalLead}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-sm-4">
              <div className="card-icon bg-danger">
                <i className="fas fa-user-plus" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>KH Tiềm Năng</h4>
                </div>
                <div className="card-body">
                  <small>{statistics.totalOpp}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-sm-4">
              <div className="card-icon bg-warning">
                <i className="fas fa-user" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>KH Chính thức</h4>
                </div>
                <div className="card-body">
                  <small>{statistics.totalCustomers}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card card-sm-4">
              <div className="card-icon bg-danger">
                <i className="fas fa-calendar-check" />
              </div>
              <div className="card-wrap">
                <div className="card-header">
                  <h4>Tỉ lệ KH quay lại</h4>
                </div>
                <div className="card-body">
                  <small>{back} %</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoarData;
