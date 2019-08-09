import React, { Component } from "react";
import Axios from "axios";
import url from "../url";
import { MDBBadge } from "mdbreact";

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
        console.log(res.data);
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
    function formatMoney(
      amount,
      decimalCount = 2,
      decimal = "",
      thousands = ","
    ) {
      try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(
          (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
        ).toString();
        let j = i.length > 3 ? i.length % 3 : 0;

        return (
          negativeSign +
          (j ? i.substr(0, j) + thousands : "") +
          i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
          (decimalCount
            ? decimal +
              Math.abs(amount - i)
                .toFixed(decimalCount)
                .slice(4)
            : "")
        );
      } catch (e) {
        console.log(e);
      }
    }
    // console.log(topCustomer.values);
    var result = formatMoney(topCustomer.values);

    // console.log(topCustomer);
    return (
      <React.Fragment>
        <div className="col-lg-4 col-md-12 col-12 col-sm-12">
          <div className="card">
            <div>
              <div className="card-header bg-info text-light">
                <h4>Nhân viên suất sắc tháng 7</h4>
              </div>
              <div>
                {topCustomer.map((topCustomer, index) => (
                  <div key={index}>
                    <h6 className="text-secondary">
                      
                      <MDBBadge pill color="success" style={{marginLeft: "5px", marginRight: "5px"}}>
                        {index + 1}
                      </MDBBadge>
                      {topCustomer.name} {result}
                    </h6>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="card-header bg-info text-light">
                <h4>Sản phẩm bán chạy tháng 7</h4>
              </div>
              <div>
                {totalmonthlysold.map((totalmonthlysold, index) => (
                  <div key={index}>
                    <h6 className="text-secondary">
                      {" "}
                      <MDBBadge pill color="success" style={{marginLeft: "5px", marginRight: "5px"}}>
                        {index + 1}
                      </MDBBadge>{" "}
                      {totalmonthlysold.name}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoardTopNv;
