import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CustomerPage from './pages/CustomerPage';
import TablesPage from './pages/TablesPage';
import SalePage from './pages/SalePage';
import NotFoundPage from './pages/NotFoundPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/customers' component={CustomerPage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/sales' component={SalePage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
