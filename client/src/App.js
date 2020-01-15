import React from "react";
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
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/sign-in-sign-up">
          <SignInSignUp />
        </Route>
        {/* <Route exact path="/Login">
          <Login />
        </Route> */}
        <Route exact path="/Profile">
          <Profile />
        </Route>
        {/* <Route exact path="/Register">
          <Register />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
