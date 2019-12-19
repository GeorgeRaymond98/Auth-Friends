import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav'
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp'; 
import FriendsList from './components/FriendsList';
import PrivateRoute from "./components/PrivateRoute"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/' component={SignUp}/>
      <Route exact path='/signin' component={SignIn}/>
      <PrivateRoute exact path='/friends' component={FriendsList}/>
    </div>
  );
}

export default App;