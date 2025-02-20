import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (

    //BEM
    <div className="App">
  <Router>
      <Header />
    <Switch>
     
        <Route path="/search">
           <SearchPage />
        </Route>
      


       <Route path="/">
         <Home />
       </Route>  
    </Switch>


      <Footer />
  </Router>


  


  {/* HOME */}
     {/* HEADER */}


     {/* BANNER */}


     {/* CARDS */}


    {/*FOOTER */}

{ /*SearchPage */}
  {/*...*/}
    </div>
  );
}

export default App;
