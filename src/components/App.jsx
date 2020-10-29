import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Search from './Search';
import StockDetail from './StockDetail';
import StockList from '../containers/StockList';
import Nav from './Nav';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Nav />
          <StockList />
        </Route>
        <Route path="/stocks/:stockName">
          <Nav />
          <StockDetail />
        </Route>
        <Route path="/search">
          <Search />
          <StockList />
        </Route>
        <Route>
          <span>User not found</span>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
