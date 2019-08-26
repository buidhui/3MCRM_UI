import React, { Component } from "react";
import TopNavigation from "../Components/TopNavigation";
import SideNavigation from "../Components/SideNavigation";
import Footer from "../Components/Footer";
import Routes from "../Components/Routes";

import { BrowserRouter, Redirect } from "react-router-dom";

class Layout extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }

    return (
      <BrowserRouter>
        <div id="app">
          <div className="main-wrapper">
            {/* Top Navigation Start */}
            <TopNavigation />
            {/* Top Navigation End */}

            {/* Sidebar Start */}
            <SideNavigation />
            {/* Sidebar End */}

            {/* Main content start */}
            <div className="main-content">
              <Routes />
            </div>
            {/* Main content end*/}

            {/* Footer   */}
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
