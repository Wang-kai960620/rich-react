import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import NoMatch from "./views/NoMatch";
import {Home} from "./views/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/money/tags" >
          <Tags/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
