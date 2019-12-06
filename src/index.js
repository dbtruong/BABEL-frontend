import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './Assets/Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Fonts/Inkfree.ttf'

import HomePage from './Components/Before_game/Home/HomePage.jsx';
import LoginPage from './Components/Before_game/Login/LoginPage.jsx';
import ChildSummary from './Components/Before_game/ChildSummary/ChildSummary.jsx'
import ChildConnexionPage from './Components/Before_game/ChildConnexion/ChildConnexionPage.jsx';
import StartPage from './Components/Before_game/Start/StartPage.jsx';
import CategoryChoicePage from './Components/In_game/CategoryChoice/CategoryChoicePage.jsx'; 
import SortingTopicsPage from './Components/In_game/SortingTopicsPage/SortingTopicsPage.jsx'; 
import ProfChildChoicePage from './Components/Before_game/ProfChildChoice/ProfChildChoicePage.jsx';
import ChoicePage from './Components/In_game/ChoicePage/ChoicePage.jsx';
import SettingsPage from './Components/Before_game/Settings/SettingsPage.jsx'

var hist = createBrowserHistory();


ReactDOM.render(<Router history={hist}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/childSummary" component={ChildSummary} />
      <Route path="/childConnexion" component={ChildConnexionPage}/>
      <Route path="/start" component={StartPage}/>
      <Route path="/categoryChoice" component={CategoryChoicePage}/>
      <Route path="/choice" component={ChoicePage} />
      <Route path="/sortingTopics" component={SortingTopicsPage}/>
      <Route path="/profChildChoice" component={ProfChildChoicePage}/>
      <Route path="/settings" component={SettingsPage}/>
    </Switch>
  </Router>, document.getElementById('root'));
