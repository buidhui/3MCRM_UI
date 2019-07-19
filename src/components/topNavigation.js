import React, {Component} from "react";
import {
  MDBDropdownMenu,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBIcon,
  MDBFormInline,
  MDBBtn
} from "mdbreact";

class TopNavigation extends Component {
  state = {
    collapse: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <MDBNavbar
        className="blue-gradient flexible-navbar"
        light
        expand="md"
        scrolling
      >
        <MDBNavbarBrand href="top#">
            <img src="https://i.imgur.com/AyGsmGV.png" alt="logo" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBFormInline className="md-form m-0">
                <input
                  className="form-control form-control-sm"
                  type="search"
                  placeholder="Tìm kiếm..."
                  aria-label="Search"
                />
                <MDBBtn
                  size="sm"
                  color="red accent-4"
                  className="my-0"
                  type="submit"
                >
                  <MDBIcon icon="search" />
                </MDBBtn>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <i className="fas fa-user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic>
                  <MDBDropdownItem href="#!">Tài khoản</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Thoát</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavigation;
