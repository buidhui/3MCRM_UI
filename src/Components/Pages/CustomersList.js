import React, { Component } from "react";
import CustomerList from "../customer/CustomerList";

class CustomersList extends Component {
  downloadFile = () => {
    window.open("http://192.168.30.50:8080/customers/exportxlsx");
  };

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div className="row">
              <div className="col-11">
                Danh sách khách hàng
                <i
                    onClick={this.downloadFile}
                    className="fas fa-download btn-download "
                  />
              </div>
              <div className="col-1">
                <div>
                  
                </div>
              </div>
            </div>
          </h1>
          <CustomerList />
        </section>
      </React.Fragment>
    );
  }
}

export default CustomersList;
