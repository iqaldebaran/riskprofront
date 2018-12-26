import React, { Component } from 'react';
import './App.css';
//import SlideBar from './components/slidebar/Slidebar'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";


import indexRoutes from "./routes/index";
import Dashboard from './components/layouts/Dashboard';
import Pages from './components/layouts/Pages';
const hist = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Pages} />

        </Switch>
      </Router>
    );
  }
}

export default App;
