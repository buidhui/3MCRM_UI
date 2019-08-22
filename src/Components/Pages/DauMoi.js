import React, { Component } from "react";
import CustomerList from "../leads/TabViewLead";
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
    const url = "http://192.168.10.10:8080/lead/upload";
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
    var inputs = document.querySelectorAll(".file-input");

    for (var i = 0, len = inputs.length; i < len; i++) {
      customInput(inputs[i]);
    }

    function customInput(el) {
      const fileInput = el.querySelector('[type="file"]');
      const label = el.querySelector("[data-js-label]");

      fileInput.onchange = fileInput.onmouseout = function() {
        if (!fileInput.value) return;

        var value = fileInput.value.replace(/^.*[/]/, "");
        el.className += " -chosen";
        label.innerText = value;
      };
    }
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Danh sách khách hàng đầu mối</div>
          </h1>

          <div className="row">
            <div className="col-lg-11 col-md-11 col-sm-11">
              <form className="file-input" onSubmit={this.onFormSubmit}>
                <input type="file" onChange={this.onChange} accept=".xlsx" />
                <span className="button">Chọn tệp</span>
                <span className="label" data-js-label>
                  Tệp chưa được chọn...
                </span>
              </form>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1">
              <button type="submit" className="btn_upload">
                <i className="fas fa-arrow-circle-up upload" />
              </button>
            </div>

            {/* <button className="button" type="submit">
                Tải lên
              </button> */}
            {/* <form onSubmit={this.onFormSubmit}>
                <input
                  className="bg-light fileinput1"
                  type="file"
                  onChange={this.onChange}
                  accept=".xlsx"
                />
                <button className="btn-info" type="submit">
                  Tải lên
                </button>
              </form> */}
          </div>

          <br />
          <CustomerList />
        </section>
      </React.Fragment>
    );
  }
}

export default DsKhachHang;
