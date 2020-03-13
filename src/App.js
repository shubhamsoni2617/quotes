import React, { Component } from "react";
import classes from "./App.module.css";
import Header from "./Container/Header";
import MovieFilter from "./Component/MovieFilter";
import Home from "./Component/Home";

import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminPanel from "./Container/Admin";
import firebase from "firebase/app";

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBb-drZXFEA51aiPJy5FFmQdmk1aMyrSqk",
      authDomain: "filmseers.firebaseapp.com",
      databaseURL: "https://filmseers.firebaseio.com",
      projectId: "filmseers",
      storageBucket: "filmseers.appspot.com",
      messagingSenderId: "219455533376",
      appId: "1:219455533376:web:82b62ca829465bb821caa5"
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Router>
        <Route path="/" exact render={() => <MovieFilter />} />
        <Route path="/admin" exact render={() => <AdminPanel />} />
        <Route path="/home" exact render={() => <Home />} />
      </Router>
    );
  }
}
export default App;
