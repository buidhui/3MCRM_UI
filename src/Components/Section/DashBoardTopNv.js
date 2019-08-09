import React, { Component } from "react";
import Axios from "axios";
import url from "../url";

class DashBoardTopNv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topCustomer: [],
      totalmonthlysold: []
    };
  }

  componentDidMount() {
    Axios({
      method: "get",
      url: `${url}/staffmonthly`
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          topCustomer: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    Axios({
      method: "get",
      url: `${url}/totalmonthlysold`
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          totalmonthlysold: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    var { topCustomer, totalmonthlysold } = this.state;

    // console.log(topCustomer);
    return (
      <React.Fragment>
        <div className="col-lg-4 col-md-12 col-12 col-sm-12">
          <div className="card">
            <div>
              <div className="card-header">
                <h4>Nhân viên suất sắc tháng 7</h4>
              </div>
              {topCustomer.map((topCustomer, index) => (
                <div key={index}>
                  <h4>{topCustomer.name}</h4>
                </div>
              ))}
            </div>

            <div>
              <div className="card-header">
                <h4>Sản phẩm bán chạy 7</h4>
              </div>
              {totalmonthlysold.map((totalmonthlysold, index) => (
                <div key={index}>
                  <h4>{totalmonthlysold.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoardTopNv;
