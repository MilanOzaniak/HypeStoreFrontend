import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage/index';
import CurrentItem from './pages/currentItem';
import SignUp from './pages/signup';
import AddProductPage from './pages/AddProduct/AddProductPage';
import UserPage from './pages/UserPage';
import ShoesPage from './pages/AllShoes';
import Formm from './components/Form1';
import AccessoriesPage from './pages/AllAccessories';
import ClothingPage from './pages/AllClothing';
import CurrentUserPage from './pages/CurrentUserPage';
import Footer from './components/Footer/Footer'
import Review from './pages/Review';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/'> <Home/> </Route>
          <Route exact path='/shoes'> <ShoesPage/> </Route>
          <Route exact path='/clothing'> <ClothingPage/> </Route>
          <Route exact path='/accessories'> <AccessoriesPage/> </Route>
          <Route path='/signup'> <SignUp/> </Route>
          <Route path='/register'> <Formm/> </Route>
          <Route exact path='/review'><Review/></Route>
          <Route exact path='/createitempage'><AddProductPage/> </Route>
          <Route exact path="/shoes/:id"><CurrentItem/></Route>
          <Route exact path="/clothing/:id"><CurrentItem/></Route>
          <Route exact path="/:id"><CurrentItem/></Route>
          <Route exact path="/user/:userName"><UserPage/></Route>
          <Route exact path="/currentUser/:userName"><CurrentUserPage/></Route>
        </Switch>
      <Footer/>
    </Router> 
  );
};


export default App;