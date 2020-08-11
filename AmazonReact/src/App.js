import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
  const [{ user }, dispatch] = useStateValue();
  //code sous condition = useEffect; tableau vide executer 1 seule fois au chargement  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is log in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is log out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      //Any cleanup aoperation go here
      unsubscribe()
    }
  }, [])
  console.log("   je ss le user")

  
  console.log(user)
  console.log("   je ss le user")

  const [toto, setToto] = useState(false);

  const tutu =()=> {
    // pour recuperer l'ancienne valeur puis la changer
    setToto(toto => !toto)
    // pour changer le state sans regarder l'ancienne valeur
    //setToto(true)

  }

  return (
    <Router>

      <div className="App">
        <Switch>toto
          <Route path="/checkout">
            <Header  />
            <h1>checkout</h1>
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {/* tout nom passé dans un composant jsx est un props */}
            <Header tata={tutu} />
            {toto &&  <Sidebar/>}
            <Home />


          </Route>
        </Switch>
      </div>


    </Router>

  );
}

export default App;
