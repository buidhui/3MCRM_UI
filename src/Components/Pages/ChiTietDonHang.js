import React from "react";
import OrderDetail from '../sale/order/OrderDetail'
const ChiTietDonHang =  ({match}) => {
    return (
        <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Chi tiết đơn hàng</div>
          </h1>
          <OrderDetail id={match.params.id} />
        </section>
      </React.Fragment>
    );
  }
export default ChiTietDonHang;
