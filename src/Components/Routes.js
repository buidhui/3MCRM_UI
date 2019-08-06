import React from "react";
import { Route, Switch } from "react-router-dom";
import TongQuan from "./Pages/TongQuan";
import DsKhachHang from "./Pages/DsKhachHang";
import NhomKhachHang from "./Pages/NhomKhachHang";
import DsSanPham from "./Pages/DsSanPham";
import DsDonHang from "./Pages/DsDonHang";
import BaoCao from "./Pages/BaoCao";
import Marketing from "./Pages/Marketing";
import DsNhanVien from "./Pages/DsNhanVien";
import ChiTietKhachHang from "./Pages/ChiTietKhachHang";
import ChiTietDonHang from "./Pages/ChiTietDonHang";
import ChiTietNhomKH from "./Pages/ChiTietNhomKH";
import ChiTietNhanVien from "./Pages/ChiTietNhanVien"
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TongQuan} />
        <Route path="/dashboard" component={TongQuan} />
        <Route path="/staffs" exact component={DsNhanVien} />
        <Route path="/staffs/:id" component={ChiTietNhanVien} />
        <Route path="/customers" exact component={DsKhachHang} />
        <Route path="/customers/:id" component={ChiTietKhachHang} />
        <Route path="/groupcustomers" exact component={NhomKhachHang} />
        <Route path="/groupcustomers/:id" component={ChiTietNhomKH} />
        <Route path="/products" exact component={DsSanPham} />
        <Route path="/orders" exact component={DsDonHang} />
        <Route path="/orders/:id" component={ChiTietDonHang} />
        <Route path="/report" component={BaoCao} />
        <Route path="/marketing" component={Marketing} />
      </Switch>
    );
  }
}

export default Routes;
