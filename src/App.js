import React from 'react';
import "./app.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from "./pages/shop"
import Privacy from "./pages/privacy"
import Terms from "./pages/terms"



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
