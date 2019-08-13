import React, { Component } from "react";
import CustomerList from "../leads/CustomerList";
import { post } from "axios";

class DsKhachHang extends Component {
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
    const url = "http://example.com/file-upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
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
          <div className="row">
            <div className="col-12">
              {" "}
              <form onSubmit={this.onFormSubmit}>
                <input
                  className="bg-light fileinput1"
                  type="file"
                  onChange={this.onChange}
                />

                <button className="btn-info" type="submit">
                  Tải lên
                </button>
              </form>
            </div>
          </div>

          <br />
          <CustomerList />
        </section>
      </React.Fragment>
    );
  }
}

export default DsKhachHang;
