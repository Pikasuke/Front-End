import React from 'react';
import './App.css';
import Home from './Home';
import SearchPage from './SearchPage';
import { BrowserRouter, Route, Link, Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="/__/firebase/7.19.1/firebase-app.js"></script>
        {/* 
        <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries --> */}
        <script src="/__/firebase/7.19.1/firebase-analytics.js"></script>

        {/* <!-- Initialize Firebase --> */}
        <script src="/__/firebase/init.js"></script>
      </BrowserRouter>


    </div>
  );
}

export default App;
