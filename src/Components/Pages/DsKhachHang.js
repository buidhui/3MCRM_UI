import React, { Component } from "react";
import CustomerList from '../customer/CustomerList'
class DsKhachHang extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Danh sách khách hàng</div>
          </h1>
          <CustomerList />
        </section>
        
      </React.Fragment>
    );
  }
}

export default DsKhachHang;
