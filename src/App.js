import React from 'react';
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import Shop from "./pages/shop/shop"
import Privacy from "./pages/privacy/privacy"
import Terms from "./pages/terms/terms"



class App extends React.Component {
  render() {
    return (
      <>
     <Router basename="/asd">
      <Header/> 
        <Switch>
         
          <Route path='/shop' component={Shop} />
          <Route path='/privacy' component={Privacy} />
          <Route path='/terms' component={Terms} />
        </Switch>
        <Footer/>
      </Router>
    </>
    )
 }
}

export default App;
