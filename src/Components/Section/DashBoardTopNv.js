import React, { Component } from "react";
import Axios from "axios";
import url from "../url";

class DashBoardTopNv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topCustomer: [],
      customersale: []
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
      url: `${url}/customersale`
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          customersale: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    var { topCustomer, customersale } = this.state;
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

    return (
      <React.Fragment>
        <div className="col-lg-4 col-md-12 col-12 col-sm-12">
          <div className="card">
            <div>
              <div className="card-header bg-info text-light">
                <h4>Nhân viên xuất sắc tháng qua</h4>
              </div>
              <div>
                <table className="table">
                  <thead>
                    <tr className="text-secondary">
                      <th scope="col">Top</th>
                      <th scope="col">Tên nhân viên</th>
                      <th scope="col">Doanh Thu (VNĐ)</th>
                    </tr>
                  </thead>
                  {topCustomer.map((topCustomer, index) => (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">
                          <span className="badge badge-pill badge-primary">
                            {" "}
                            {index + 1}
                          </span>
                        </th>
                        <td> {topCustomer.name}</td>
                        <td>{formatMoney(topCustomer.values)}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>

            <div>
              <div className="card-header bg-info text-light">
                <h4>Khách hàng chi tiêu nhiều nhất</h4>
              </div>
              <div>
                <table className="table">
                  <thead>
                    <tr className="text-secondary">
                      <th scope="col">Top</th>
                      <th scope="col">Tên khách hàng</th>
                      <th scope="col">Chi tiêu (VNĐ)</th>
                    </tr>
                  </thead>
                  {customersale.map((customersale, index) => (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">
                          <span className="badge badge-pill badge-primary">
                            {" "}
                            {index + 1}
                          </span>
                        </th>
                        <td> {customersale.name}</td>
                        <td>{formatMoney(customersale.values)}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoardTopNv;
