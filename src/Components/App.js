import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "@chakra-ui/react";

import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import Navbar from '../Components/Navbar';
import Cart from '../Components/Cart'
import NavMenu from '../Components/NavMenu'
import Footer from '../Components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <NavMenu />
        <Cart />
        <Switch>
        <Route path="/products/:handle">
          <ProductPage />
        </Route>
        <Route path="/">
        <HomePage />
        </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
