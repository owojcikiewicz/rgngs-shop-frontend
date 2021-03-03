import React from 'react';
import "./app.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import Item from "./components/item/item";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Privacy from "./pages/privacy"
import Terms from "./pages/terms"


class App extends React.Component {
  render() {
    return (
      <>
     <Header/>
     <Router>
      <Footer/>
        <Switch>
          <Route path='/privacy' component={Privacy} />
          <Route path='/terms' component={Terms} />
        </Switch>
      </Router>
    </>
    )
 }
}

export default App;
