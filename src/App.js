import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import HomePage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'


function App() {
  return (
    <div>
     
      <Switch>

      <Route exact path='/' component={HomePage}></Route>
    <Route exact path="/shop" component={ShopPage}></Route>
    </Switch>
     {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
