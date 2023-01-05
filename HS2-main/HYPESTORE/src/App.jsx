import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Announcement from './components/Announcement';
import Home from './pages/index';
import Shoes from './pages/shoes';
import Clothing from './pages/clothing';
import Accessories from './pages/accessories';
import SignUp from './pages/signup';
import Register from "./pages/register";
import NaSi from './pages/NaSi';
function App() {
  return (
    <Router>
      <Announcement />
      <NaSi/>
        <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route path='/shoes'> <Shoes/> </Route>
        <Route path='/clothing'> <Clothing/> </Route>
        <Route path='/accessories'> <Accessories/> </Route>
        <Route path='/signup'> <SignUp/> </Route>
        <Route path='/register'> <Register/> </Route>
        </Switch>
    </Router> 
  );
};


export default App;