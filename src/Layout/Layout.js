import React, { Component } from "react";
import TopNavigation from "../Components/TopNavigation";
import SideNavigation from "../Components/SideNavigation";
// import Footer from '../Components/Footer';
import { BrowserRouter } from "react-router-dom";

class Layout extends Component {
  render() {
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
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
