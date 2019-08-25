import axios from "axios";
import React, { Component } from "react";
import StaffListItem from "./StaffListItem";
import DropDownCus from "./DropDownCus";
import PopupForm from "./PopupFormStaff";
import { Table } from "react-bootstrap";
import url from "../url";
import BreadCrum from "../breadcums/BreadCrumStaffList";
import ChangePassword from "./ChangePassword";
class StaffList extends Component {
  state = {
    staffList: [],
    filter: {
      filterName: ""
    }
  };
  onUpdateData = data => {
    this.setState({
      staffList: data
    });
  };
  componentDidMount() {
    axios({
      method: "get",
      url: `${url}/staffs/list`
    })
      .then(respone => {
        this.setState({
          staffList: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onFilter = filterName1 => {
    if (!filterName1) {
      this.setState(
        {
          filter: {
            filterName: ""
          }
        },
        () => {
          console.log(this.state);
        }
      );
    } else {
      this.setState(
        {
          filter: {
            filterName: filterName1
              ? filterName1.toLowerCase()
              : this.state.filter.filterName
          }
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };
  render() {
    var staffList = this.state.staffList;
    const { filter } = this.state;

    if (filter) {
      staffList = staffList.filter(staff => {
        return (
          staff.name.toLowerCase().indexOf(filter.filterName) !== -1 ||
          staff.email.toLowerCase().indexOf(filter.filterName) !== -1 ||
          staff.phone.toLowerCase().indexOf(filter.filterName) !== -1
        );
      });
    } else {
      return staffList;
    }
    const eleStaff = staffList.map((staff, index) => {
      return <StaffListItem key={staff.id} index={index} staff={staff} />;
    });
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row" style={{ marginBottom: "15px" }}>
            <BreadCrum />
          </div>
          <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <DropDownCus onFilter={this.onFilter} />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <PopupForm
                open={this.props.open}
                onUpdateData={this.onUpdateData}
              />
            </div>
          </div>
          <Table responsive hover>
            <thead>
              <tr>
                <th style={{ display: "table-cell", verticalAlign: "middle" }}>
                  Tên nhân viên
                </th>
                <th style={{ display: "table-cell", verticalAlign: "middle" }}>
                  Chức vụ
                </th>
                <th
                  style={{ display: "table-cell", verticalAlign: "middle" }}
                  className="text-center"
                >
                  Ngày sinh
                </th>
                <th style={{ display: "table-cell", verticalAlign: "middle" }}>
                  Email
                </th>
                <th
                  style={{ display: "table-cell", verticalAlign: "middle" }}
                  className="text-center"
                >
                  Điện thoại
                </th>
                <th
                  style={{ display: "table-cell", verticalAlign: "middle" }}
                  className="text-center"
                >
                  Giới tính
                </th>
              </tr>
            </thead>
            <tbody>{eleStaff}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default StaffList;
