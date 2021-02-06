import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import HomeScreen from "./components/HomeScreen";
import LoginScreen from './components/Login';
import Profile from './components/Profile';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase_auth';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
            <Switch>
              <Route exact path="/profile">
                <Profile />
              </Route>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
          )}
      </Router>

    </div>
  );
}

export default App;
