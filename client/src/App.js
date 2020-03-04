import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'; 
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import AllWarehouses from './pages/AllWarehouses/AllWarehouses'; 
import AllInventory from './pages/AllInventory/AllInventory'; 
import OneWarehouse from './pages/OneWarehouse/OneWarehouse';
import OneProduct from './pages/OneProduct/OneProduct';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Redirect exact from='/' to='/warehouses' />
          <Route path='/' component={AllWarehouses}/>
          <Route path='/inventory' component={AllInventory} />
          <Route path='/warehouses/:id' component={OneWarehouse} />
          <Route path='/inventory/:id' component={OneProduct} /> 
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
