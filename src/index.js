import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './Assets/Css/index.css';

import HomePage from './Components/Home/HomePage.jsx';
import Page from './Components/NewPage/Page.jsx';
var hist = createBrowserHistory();


ReactDOM.render(<Router history={hist}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/newpage" component={Page} />
    </Switch>
  </Router>, document.getElementById('root'));
