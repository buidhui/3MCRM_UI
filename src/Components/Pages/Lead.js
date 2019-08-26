import React, { Component } from "react";
import CustomerList from "../leads/TabViewLead";
import { post } from "axios";

class Lead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  fileUpload(file) {
    const url = "http://192.168.30.50:8080/lead/upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Danh sách khách hàng đầu mối</div>
          </h1>

          <form onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="col-lg-11 col-md-11 col-sm-11 file-input">
                <input type="file" onChange={this.onChange} accept=".xlsx" />
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1">
                <button
                  onClick={e => {
                    if (window.alert("Tải tệp tin thành công !!!"))
                      this.deleteItem(e);
                  }}
                  type="submit"
                  className="btn_upload"
                >
                  <i className="fas fa-arrow-circle-up upload" />
                </button>
              </div>
            </div>
          </form>

          <br />
          <CustomerList />
        </section>
      </React.Fragment>
    );
  }
}

export default Lead;
