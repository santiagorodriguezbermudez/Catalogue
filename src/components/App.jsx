import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Search from './Search';
import StockDetail from './StockDetail';
import StockList from '../containers/StockList';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Search />
          <StockList />
        </Route>
        <Route path="/stocks/:stockName">
          <StockDetail />
        </Route>
        <Route>
          <span>User not found</span>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
