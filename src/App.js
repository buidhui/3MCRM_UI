import React from 'react';
import Routes from '../src/components/Routes';
// import TopNavigation from './components/topNavigation';
// import SideNavigation from './components/sideNavigation';
// import Footer from './components/Footer';
// import HomePage from './components/pages/HomePage';
// import CustomerPage from './components/pages/CustomerPage';
// import ReportPage from './components/pages/ReportPage';
// import SalePage from './components/pages/SalePage';
// import NotFoundPage from './components/pages/NotFoundPage';
// import MarketingPage from './components/pages/MarketingPage';
import './index.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import layout from './layout/layout.js'
import login from './components/login/login.js'
import './index.js'


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/homepage" />} />
          <Route path='/customers' render={() => <Redirect to="/app/customers" />} />
        <Route path='/report' render={() => <Redirect to="/app/report" />}/>
        <Route path='/sales' render={() => <Redirect to="/app/sales" />} />
        <Route path='/marketing' render={() => <Redirect to="/app/marketing" />}/>
        <Route path='/404' render={() => <Redirect to="/app/404" />} />
        <Route exact path="/app" render={() => <Redirect to="/app/homepage" />}/>
        <PrivateRoute path="/app" component={layout} />
        <PublicRoute path="/login" component={login} />
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
