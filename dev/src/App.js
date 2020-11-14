import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import Work from "./components/pages/Work"

function App() {
    return (
    
    <div>
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />

        </BrowserRouter>
        
    </div>
        
    );
}

export default App;