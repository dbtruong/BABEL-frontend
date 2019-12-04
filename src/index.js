import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './Assets/Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Fonts/Inkfree.ttf'

import HomePage from './Components/Home/HomePage.jsx';
import LoginPage from './Components/Login/LoginPage.jsx'
import Page from './Components/NewPage/Page.jsx';
var hist = createBrowserHistory();


ReactDOM.render(<Router history={hist}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/newpage" component={Page} />
    </Switch>
  </Router>, document.getElementById('root'));
