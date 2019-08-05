import React, { Component } from "react";
import OrderList from '../sale/order/OrderList'
class DsDonHang extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Danh sách đơn hàng</div>
          </h1>
          <OrderList />
        </section>
      </React.Fragment>
    );
  }
}

export default DsDonHang;
