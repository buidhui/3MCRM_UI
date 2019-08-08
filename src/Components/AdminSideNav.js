import React from "react";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  return (
    <div className="main-sidebar">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.navbar.active {\n\tbackground-color: #fff;\n}\n.navbar-bg {\n\tbackground-color: #fff;\n}\n.navbar .nav-link {\n\tcolor: #2C2E3E;\n}\n.navbar .nav-link:hover {\n\tcolor: #3f4257;\n}\n.navbar .form-inline .form-control {\n\tbackground-color: #f2f2f2;\n}\n.navbar .form-inline .btn {\n\tbackground-color: #f2f2f2;\n}\n.main-sidebar {\n\tbackground-color: #212330;\n}\n.main-sidebar .sidebar-brand {\n\tbackground-color: #1f202e;\n}\n.main-sidebar .sidebar-brand a {\n\tcolor: #fff;\n}\n.main-sidebar .sidebar-menu li.active a {\n\tbackground-color: #1f202e;\n\tcolor: #fff;\n}\n.main-sidebar .sidebar-menu li a :hover {\n\tbackground-color: #1f202e;\n\tcolor: #1a9df0;\n}\n.main-sidebar .sidebar-menu li :hover {\n\tbackground-color: #1f202e;\n  }\n.main-sidebar .sidebar-menu li ul.menu-dropdown li a {\n\tcolor: #868e96;\n}\n.main-sidebar .sidebar-menu li ul.menu-dropdown li.active a {\n\tcolor: #fff;\n}\n.main-sidebar .sidebar-menu li a:hover {\n\tbackground-color: #1f202e;\n}\n.main-sidebar .sidebar-menu li.menu-header {\n\tcolor: #3f4257;\n}\n.main-sidebar .sidebar-user .sidebar-user-details .user-name {\n\tcolor: #ededed;\t\n}\n"
        }}
      />
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <img
            alt="MDB React Logo"
            className="img-fluid"
            src="https://i.imgur.com/syrimDs.png  "
          />
        </div>
        <div className="sidebar-user">
          <div className="sidebar-user-picture">
            <img alt="" src="../dist/img/avatar/avatar-1.jpeg" />
          </div>
          <div className="sidebar-user-details">
            <div className="user-name">Việt Huy</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Tổng quan</li>
          <li>
            <Link to="/">
              <i className="fas fa-tachometer-alt" />
              <span>Tổng quan</span>
            </Link>
          </li>
          <li className="menu-header">Chi tiết</li>
          <li>
            <Link to="/staffs">
              <i className="fas fa-chart-line" />
              <span>Nhân viên</span>
            </Link>
          </li>
          <li>
            <a href="top#" className="has-dropdown">
              <i className="fas fa-user" />
              <span>Khách hàng</span>
            </a>
            <ul className="menu-dropdown">
              <li>
                <Link to="/customers">
                  <i className="ion ion-ios-circle-outline" />
                  Danh sách khách hàng
                </Link>
              </li>
              <li>
                <Link to="/groupcustomers">
                  <i className="ion ion-ios-circle-outline" />
                  Nhóm khách hàng
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="top#" className="has-dropdown">
              <i className="fas fa-shopping-cart" />
              <span>Sales</span>
            </a>
            <ul className="menu-dropdown">
              <li>
                <Link to="/products">
                  <i className="ion ion-ios-circle-outline" />
                  Danh sách sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/orders">
                  <i className="ion ion-ios-circle-outline" />
                  Danh sách đơn hàng
                </Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <Link to="/report">
              <i className="fas fa-chart-line" />
              <span>Báo cáo</span>
            </Link>
          </li> */}
          <li>
            <Link to="/marketing">
              <i className="ion ion-stats-bars" />
              <span>Marketing</span>
            </Link>
          </li>
          <li className="menu-header">Thêm</li>
          <li>
            <Link to="/credit">
              <i className="fas fa-info-circle" /> Credits
            </Link>
          </li>
        </ul>
        <div className="p-3 mt-4 mb-4">
          <Link
            to="/setting"
            className="btn btn-info btn-shadow btn-round has-icon has-icon-nofloat btn-block"
          >
            <i className="ion ion-help-buoy" />
            <div>Cài đặt</div>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SideNavigation;
