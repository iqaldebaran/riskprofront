import React, { Component } from 'react';
import './App.css';
//import SlideBar from './components/slidebar/Slidebar'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";


import indexRoutes from "./routes/index";
const hist = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
    );
  }
}

export default App;
