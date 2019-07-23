import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/tongquan" />} />
        <Route
          path="/listcustomers"
          render={() => <Redirect to="/app/listcustomers" />}
        />
        <Route
          path="/groupcustomers"
          render={() => <Redirect to="/app/groupcustomers" />}
        />
        <Route
          path="/listproducts"
          render={() => <Redirect to="/app/listproducts" />}
        />
        <Route path="/order" render={() => <Redirect to="/app/order" />} />
        <Route path="/report" render={() => <Redirect to="/app/report" />} />
        <Route
          path="/marketing"
          render={() => <Redirect to="/app/marketing" />}
        />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/tongquan" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

function PrivateRoute({ component, ...rest }) {
  function render(props) {
    if (localStorage.getItem("token")) {
      return React.createElement(component, props);
    }
    return <Redirect to={{ pathname: "/login" }} />;
  }

  return <Route {...rest} render={render} />;
}

function PublicRoute({ component, ...rest }) {
  function render(props) {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return React.createElement(component, props);
  }
  return <Route {...rest} render={render} />;
}
