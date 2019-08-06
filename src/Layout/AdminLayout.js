import React, { Component } from "react";
import TopNavigation from "../Components/TopNavigation";
import AdminSideNav from "../Components/AdminSideNav";
import Routes from "../Components/Routes";
import Footer from "../Components/Footer";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

class AdminLayout extends Component {
  render() {
    // if (!localStorage.getItem("token")) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <BrowserRouter>
        <div id="app">
          <div className="main-wrapper">
            {/* Top Navigation Start */}
            <TopNavigation />
            {/* Top Navigation End */}

            {/* Sidebar Start */}
            {/* <SideNavigation /> */}
            <AdminSideNav />
            {/* Sidebar End */}
            <div className="main-content">
              <Routes />
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default AdminLayout;
