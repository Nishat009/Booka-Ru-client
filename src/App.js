import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import noMatch from './components/noMatch/noMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import OrderPreview from './components/OrderPreview/OrderPreview';
import ThankYou from './components/ThankYou/ThankYou';


export const UserContext =createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/addBook">
             <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/manageBook">
              <Admin></Admin>
              </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut>
              </PrivateRoute>
              <PrivateRoute path="/checkOut">
              <CheckOut></CheckOut>
              </PrivateRoute>
              <PrivateRoute path="/orderPreview">
            <OrderPreview></OrderPreview>
          </PrivateRoute>
          <PrivateRoute path="/thank">
            <ThankYou></ThankYou>
          </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <noMatch></noMatch>
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;