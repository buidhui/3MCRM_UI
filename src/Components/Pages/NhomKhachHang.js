import React, { Component } from "react";
import CustomerGroupList from '../customer/customerGroup/CustomerGroupList'
class NhomKhachHang extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Nhóm khách hàng</div>
          </h1>
          <CustomerGroupList />
        </section>
      </React.Fragment>
    );
  }
}

export default NhomKhachHang;
