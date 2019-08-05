import React, { Component } from "react";
import ProductList from '../sale/product/ProductList'
class DsSanPham extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Danh sách sản phẩm</div>
          </h1>
          <ProductList />
        </section>
      </React.Fragment>
    );
  }
}

export default DsSanPham;
