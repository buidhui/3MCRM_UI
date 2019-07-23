import React from "react";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  return (
    <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <img
            alt="MDB React Logo"
            className="img-fluid"
            src="https://i.imgur.com/zTBWKsm.png"
          />
        </div>
        <div className="sidebar-user">
          <div className="sidebar-user-picture">
            <img alt="" src="../dist/img/avatar/avatar-1.jpeg" />
          </div>
          <div className="sidebar-user-details">
            <div className="user-name">Huy Bùi</div>
            <div className="user-role">Nhân viên bán hàng</div>
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
            <a href="top#" className="has-dropdown">
              <i className="fas fa-user" />
              <span>Khách hàng</span>
            </a>
            <ul className="menu-dropdown">
              <li>
                <Link to="/listcustomers">
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
              <li>
                <Link to="/customercare">
                  <i className="ion ion-ios-circle-outline" />
                  Chăm sóc khách hàng
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
                <Link to="/listproducts">
                  <i className="ion ion-ios-circle-outline" />
                  Danh sách sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/order">
                  <i className="ion ion-ios-circle-outline" />
                  Danh sách đơn hàng
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/report">
              <i className="fas fa-chart-line" />
              <span>Báo cáo</span>
            </Link>
          </li>
          <li>
            <Link to="/marketing">
              <i className="ion ion-stats-bars" />
              <span>Marketing</span>
            </Link>
          </li>
          {/* <li>
									<a href="top#" className="has-dropdown"><i className="ion ion-ios-copy-outline" /><span>Mẫu views</span></a>
									<ul className="menu-dropdown">
										<li><a href="../../public/templates/login.html"><i className="ion ion-ios-circle-outline" /> Login</a></li>
										<li><a href="../../public/templates/register.html"><i className="ion ion-ios-circle-outline" /> Register</a></li>
										<li><a href="../../public/templates/forgot.html"><i className="ion ion-ios-circle-outline" /> Forgot Password</a></li>
										<li><a href="../../public/templates/reset.html"><i className="ion ion-ios-circle-outline" /> Reset Password</a></li>
										<li><a href="../../public/templates/404.html"><i className="ion ion-ios-circle-outline" /> 404</a></li>
									</ul>
								</li> */}
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
