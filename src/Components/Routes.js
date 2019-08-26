import React from "react";
import { Route, Switch } from "react-router-dom";
import Marketing from "./Pages/Marketing";
import CustomersDetail from "./Pages/CustomersDetail";
import Setting from "./Pages/Setting";
import Scheduler from "./Pages/Scheduler";
import OrderList from "./Pages/OrderList";
// import CustomerDetail from "./sale/order/OrderDetail";
import Lead from "./Pages/Lead";
import DashBoard from "./Pages/DashBoard";
import GroupsCustomer from "./Pages/GroupsCustomer";
import ProductsList from "./Pages/ProductsList";
import StaffsList from "./Pages/StaffsList";
import OrdersList from "./Pages/OrdersList";
import GroupCusDetail from "./Pages/GroupCusDetail";
import StaffsDetail from "./Pages/StaffsDetail";
import CustomersList from "./Pages/CustomersList";
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/staffs" exact component={StaffsList} />
        <Route path="/staffs/:id" component={StaffsDetail} />
        <Route path="/customers" exact component={CustomersList} />
        <Route path="/customers/:id" component={CustomersDetail} />
        <Route path="/groupcustomers" exact component={GroupsCustomer} />
        <Route path="/groupcustomers/:id" component={GroupCusDetail} />
        <Route path="/products" exact component={ProductsList} />
        <Route path="/orders" exact component={OrdersList} />
        <Route path="/orders/:id" component={OrderList} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/leads" component={Lead} />
        <Route path="/scheduler" component={Scheduler} />

        <Route path="/setting" component={Setting} />
      </Switch>
    );
  }
}

export default Routes;
