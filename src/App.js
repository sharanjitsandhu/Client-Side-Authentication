import React from "react";
import { Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import Users from "./components/Users";
import SignUp from "./components/SignUp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={SignUp} />
      </main>
    </div>
  );
}

export default App;
