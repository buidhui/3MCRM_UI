import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import ReportPage from './pages/ReportPage';
import SalePage from './pages/SalePage';
import NotFoundPage from './pages/NotFoundPage';
import MarketingPage from './pages/MarketingPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/app/homepage' component={HomePage} />
        <Route path='/app/customers' component={CustomerPage} />
        <Route path='/app/report' component={ReportPage} />
        <Route path='/app/sales' component={SalePage} />
        <Route path='/app/marketing' component={MarketingPage} />
        <Route path='/app/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
