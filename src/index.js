import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './Assets/Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Fonts/Inkfree.ttf'
import * as serviceWorker from './serviceWorker';

import HomePage from './Components/Before_game/Home/HomePage.jsx';
import LoginPage from './Components/Before_game/Login/LoginPage.jsx';
import ChildSummary from './Components/Before_game/ChildSummary/ChildSummary.jsx'
import ChildConnexionPage from './Components/Before_game/ChildConnexion/ChildConnexionPage.jsx';
import StartPage from './Components/Before_game/Start/StartPage.jsx';
import CategoryChoicePage from './Components/In_game/CategoryChoice/CategoryChoicePage.jsx'; 
import SortingTopics from './Components/In_game/SortingTopicsPage/SortingTopics.jsx'; 
import ProfChildChoicePage from './Components/Before_game/ProfChildChoice/ProfChildChoicePage.jsx';
import SummaryPage from './Components/After_game/Summary/SummaryPage.jsx'; 
import SettingsPage from './Components/Before_game/Settings/SettingsPage.jsx'; 
import ChoiceLike from './Components/In_game/ChoicePages/ChoiceLike.jsx';
import ChoiceHelp from './Components/In_game/ChoicePages/ChoiceHelp.jsx';
import ChoiceHappy from './Components/In_game/ChoicePages/ChoiceHappy.jsx';
import CommentaryPage from './Components/In_game/Commentary/CommentaryPage.jsx';
import MandatePage from './Components/Before_game/Mandate/MandatePage.jsx'; 

var hist = createBrowserHistory();


ReactDOM.render(<Router history={hist}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/childSummary" component={ChildSummary} />
      <Route path="/childConnexion" component={ChildConnexionPage}/>
      <Route path="/start" component={StartPage}/>
      <Route path="/categoryChoice" component={CategoryChoicePage}/>
      <Route path="/choiceLike" component={ChoiceLike} />
      <Route path="/choiceHelp" component={ChoiceHelp} />
      <Route path="/choiceHappy" component={ChoiceHappy} />
      <Route path="/sortingTopics" component={SortingTopics}/>
      <Route path="/profChildChoice" component={ProfChildChoicePage}/>
      <Route path="/summary" component={SummaryPage}/>
      <Route path="/settings" component={SettingsPage}/>
      <Route path="/commentary" component={CommentaryPage}/>
      <Route path="/mandate" component={MandatePage}/>
    </Switch>
  </Router>, document.getElementById('root'));

  serviceWorker.register();
 