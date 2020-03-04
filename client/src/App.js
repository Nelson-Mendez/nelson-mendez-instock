import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import SingleProduct from './components/SingleProduct/SingleProduct'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    </div>
  );
}

export default App;
