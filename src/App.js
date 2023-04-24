import './App.css';
import React from 'react';
import {Navbar, Container, Nav, Card, Row, Col, Image, Button,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './layout/Navigation'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Review from './pages/Review'

function App() {
  return (

      <div className="App-header">
        <Navigation/>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/categories"
            element={<Categories/>}
          />
          <Route
            path="/review"
            element={<Review/>}
          />
        </Routes>
      </div>
  );
}


export default App;
