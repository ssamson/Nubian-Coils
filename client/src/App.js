import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
// import Login from "./components/Login";
import Profile from "./components/Profile";
// import Register from "./components/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInSignUp from "./components/SignInSignUp";
import PrivateRoute from "./components/routing/PrivateRoute";
function App() {
  const [user, setUser] = useState(null);

  const setAuthToken = token => {
    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }
  };
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/user/load");
      setUser(res.data);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/sign-in-sign-up">
          <SignInSignUp setUser={setUser} />
        </Route>
        {/* <Route exact path="/Login">
          <Login />
        </Route> */}
        <PrivateRoute exact path="/Profile/:id">
          <Profile />
        </PrivateRoute>
        {/* <Route exact path="/Register">
          <Register />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
