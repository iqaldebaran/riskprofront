import React, { Component } from 'react';
import './css/App.css';
//import SlideBar from './components/slidebar/Slidebar'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";


import indexRoutes from "./routes/index";
// import Dashboard from './components/layouts/Dashboard.jsx';
import Pages from './components/layouts/Pages';
import PrivateRoute from './components/private-route/PrivateRoute';
// import LoginPage from './components/views/Pages/LoginPage';
// import Widgets from './components/views/Widgets/Widgets';
const hist = createBrowserHistory();

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // S@et user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // console.log(setCurrentUser(decoded).payload.email)
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
                     // {console.log("index routes: ",prop.auth)}
          if(prop.auth === "Private"){
            return <PrivateRoute path={prop.path} component={prop.component} key={key} />
          }
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          
          {/* AQUI PONEMOS LA PAGINA PRINCIPAL */}
          <Route exact path="/" component={Pages} />

          {/* <Route exact path="/pages/login" component={LoginPage} />
          <Route exact path="/widgets" component={Widgets} /> */}




        </Switch>

      </Router>
      </Provider>

    );
  }
}

export default App;
