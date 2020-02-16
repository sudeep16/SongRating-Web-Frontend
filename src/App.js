import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Components/User/loginComponent";
import Register from "./Components/User/registerComponent";
import adminLogin from "./Components/Admin/loginComponent"
import Homepage from "./Components/User/Homepage";
import Profile from "./Components/User/Profile";
import RatedMusic from "./Components/User/RatedMusic";
import adminHomepage from "./Components/Admin/adminHomepage";
import userList from "./Components/Admin/userList";
import PrivateRouter from "./Components/PrivateRouter/PrivateRoute"

function App() {
  return (
  <>
  <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/adminLogin" component={adminLogin} />
            <PrivateRouter exact path="/Homepage" component={Homepage} />
            <PrivateRouter exact path="/Profile" component={Profile} />
            <PrivateRouter exact path="/Ratedmusic" component={RatedMusic} />
            <PrivateRouter exact path="/adminHomepage" component={adminHomepage} />
            <PrivateRouter exact path="/userList" component={userList}/>

          </Switch>
    </Router>
    </>
  );
}

export default App;