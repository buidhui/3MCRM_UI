import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src="https://i.imgur.com/Y4blPMY.png"/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">                                                        
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Trang chủ
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/customers" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Khách hàng
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Báo cáo
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/sales" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="landmark" className="mr-3"/>
                        Sales
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="business-time" className="mr-3"/>
                        Marketings 
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;