import React from "react";
import CustomerDetail from '../customer/CustomerDetail'
const ChiTietKhachHang =  ({match}) => {
    return (
        <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Thông tin chi tiết khách hàng </div>
          </h1>
          <CustomerDetail id={match.params.id} />
        </section>
      </React.Fragment>
    );
  }
export default ChiTietKhachHang;
