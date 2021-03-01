import React from 'react';
import "./app.css";
import Header from "./components/header/header";
import Item from "./components/item/item";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from "./components/pages/shop"
import Terms from "./components/pages/terms"
import FAQ from "./components/pages/faq"


function App() {
 return (
  <Router>
   <Header/>
  <Switch>
    <Route path='/' exact component={Shop} />
    <Route path='/terms' component={Terms} />
    <Route path='/faq' component={FAQ} />
  </Switch>
</Router>
 
  );
}

export default App;
