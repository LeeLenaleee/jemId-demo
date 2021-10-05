import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import ItemsList from './components/PotItems/PotItemList/ItemsList';
import SinglePotItem from './components/PotItems/SinglePotItem/SinglePotItem';
import NavBar from './components/UI/Nav/NavBar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/items" component={ItemsList}/>
          <Route exact path="/singlePot" component={SinglePotItem}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
