import React from "react";
import { Route, Switch } from "react-router-dom";
import TongQuan from "./Pages/TongQuan";
import DsKhachHang from "./Pages/DsKhachHang";
import NhomKhachHang from "./Pages/NhomKhachHang";
import DsSanPham from "./Pages/DsSanPham";
import DsDonHang from "./Pages/DsDonHang";
import BaoCao from "./Pages/BaoCao";
import Marketing from "./Pages/Marketing";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TongQuan} />
        <Route path="/tongquan" component={TongQuan} />
        <Route path="/listcustomers" component={DsKhachHang} />
        <Route path="/groupcustomers" component={NhomKhachHang} />
        <Route path="/listproducts" component={DsSanPham} />
        <Route path="/order" component={DsDonHang} />
        <Route path="/report" component={BaoCao} />
        <Route path="/marketing" component={Marketing} />
      </Switch>
    );
  }
}

export default Routes;
