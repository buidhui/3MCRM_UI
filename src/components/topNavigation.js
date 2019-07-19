import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon, MDBFormInline, MDBBtn } from 'mdbreact';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="top#">
                <a href="index.html" className="brand-logo">
                  <img src='https://i.imgur.com/AyGsmGV.png'  alt="logo" />
                </a>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBFormInline className="md-form m-0">
                <input className="form-control form-control-sm" type="search" placeholder="Tìm kiếm..." aria-label="Search"/>
                <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="top#" target="_blank"><MDBIcon icon="user-circle" className="mr-2"/>Huy Bùi</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="top#" target="_blank"><MDBIcon  icon="times" className="mr-2"/>Thoát</a> 
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;