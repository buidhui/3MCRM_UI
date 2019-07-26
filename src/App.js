import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Layout from "./Layout/Layout";
import AdminLayout from "./Layout/AdminLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
