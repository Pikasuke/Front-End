import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import SignUp from './SignUp';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/" component={Landing} />
          <Route component={ErrorPage} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
