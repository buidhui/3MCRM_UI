import React from "react";
import Routes from "./Routes";
import Footer from "../Components/Footer";

export default class TopNavigation extends React.Component {
  render() {
    return (
      <div className="navbar-bg">
        <nav className="navbar navbar-expand-lg main-navbar">
          <form className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
              <li>
                <a
                  href="top#"
                  data-toggle="sidebar"
                  className="nav-link nav-link-lg"
                >
                  <i className="ion ion-navicon-round" />
                </a>
              </li>
              <li>
                <a
                  href="top#"
                  data-toggle="search"
                  className="nav-link nav-link-lg d-sm-none"
                >
                  <i className="ion ion-search" />
                </a>
              </li>
            </ul>
            <div className="search-element">
              <input
                className="form-control"
                type="search"
                placeholder="Tìm kiếm..."
                aria-label="Search"
              />
              <button className="btn" type="submit">
                <i className="ion ion-search" />
              </button>
            </div>
          </form>
          <ul className="navbar-nav navbar-right">
            <li className="dropdown dropdown-list-toggle">
              <a
                href="top#"
                data-toggle="dropdown"
                className="nav-link notification-toggle nav-link-lg beep"
              >
                <i className="ion ion-ios-bell-outline" />
              </a>
              <div className="dropdown-menu dropdown-list dropdown-menu-right">
                <div className="dropdown-header">
                  Thông báo
                  <div className="float-right">
                    <a href="top#">Xem tất cả</a>
                  </div>
                </div>
                <div className="dropdown-list-content">
                  <a href="top#" className="dropdown-item dropdown-item-unread">
                    <img
                      alt=""
                      src="../dist/img/avatar/avatar-1.jpeg"
                      className="rounded-circle dropdown-item-img"
                    />
                    <div className="dropdown-item-desc">
                      <b>Gia Vinh</b> đã gửi email cho bạn.
                      <div className="time">10 tiếng trước</div>
                    </div>
                  </a>
                  <a href="top#" className="dropdown-item dropdown-item-unread">
                    <img
                      alt=""
                      src="../dist/img/avatar/avatar-2.jpeg"
                      className="rounded-circle dropdown-item-img"
                    />
                    <div className="dropdown-item-desc">
                      <b>Việt Huy</b> đã mua bim bim cho cả team.
                      <div className="time">12 tiếng trước</div>
                    </div>
                  </a>
                  <a href="top#" className="dropdown-item">
                    <img
                      alt=""
                      src="../dist/img/avatar/avatar-3.jpeg"
                      className="rounded-circle dropdown-item-img"
                    />
                    <div className="dropdown-item-desc">
                      <b>Minh Hiếu</b> đã trở thành Captain America
                      <div className="time">12 tiếng trước</div>
                    </div>
                  </a>
                  <a href="top#" className="dropdown-item">
                    <img
                      alt=""
                      src="../dist/img/avatar/avatar-4.jpeg"
                      className="rounded-circle dropdown-item-img"
                    />
                    <div className="dropdown-item-desc">
                      <b>Ngọc Trần</b> đã ăn cơm trưa xong
                      <div className="time">16 tiếng trước</div>
                    </div>
                  </a>
                  <a href="top#" className="dropdown-item">
                    <img
                      alt=""
                      src="../dist/img/avatar/avatar-5.jpeg"
                      className="rounded-circle dropdown-item-img"
                    />
                    <div className="dropdown-item-desc">
                      <b>Nghĩa Ngọ</b> đã fix xong bug
                      <div className="time">Hôm qua</div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a
                href="top#"
                data-toggle="dropdown"
                className="nav-link dropdown-toggle nav-link-lg"
              >
                <i className="ion ion-android-person d-lg-none" />
                <div className="d-sm-none d-lg-inline-block">Chào, Huy Bùi</div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="profile.html" className="dropdown-item has-icon">
                  <i className="ion ion-android-person tkdx" /> Tài khoản
                </a>
                <a href="top#" className="dropdown-item has-icon">
                  <i className="ion ion-log-out tkdx" /> Đăng xuất
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/* Main content start */}
        <div className="main-content">
          <Routes />
        </div>
        {/* Main content end*/}

        {/* Footer   */}
        <Footer />
      </div>
    );
  }
}
