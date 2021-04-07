import React from "react";
import axios from "axios";
import "./app.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Shop from "./pages/shop/shop";
import Privacy from "./pages/privacy/privacy";
import Terms from "./pages/terms/terms";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        user: {}, 
        info: {}, 
        loggedin: false
      },
      packages: []
    };
  };

  async getInfo(id) {
    return new Promise(async (resolve, reject) => {
      await axios.get("/info?id=" + id)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  async componentDidMount() {
    // fetch: login status. 
    await axios.get("/login/user", {withCredentials: true}) 
      .then(async res => { 
        await this.getInfo(res.data.id)
          .then(info => {
            this.setState(state => ({
              login: {
                user: {id: res.data.id, rcoins: res.data.rcoins},
                info: info,
                loggedin: true
              },
              packages: state.packages
            }));
          })
          .catch(err => {
            this.setState(state => ({
              login: {
                user: {id: res.data.id, rcoins: res.data.rcoins},
                info: state.info,
                loggedin: true
              },
              packages: state.packages
            }));
          }); 
      })
      .catch(err => {
        if (err.code == 401) {
          this.setState(state => ({
            login: {
              user: state.user,
              info: state.info,
              loggedin: false,
            },
            packages: state.packages
          }));
        };
      });
    
    // fetch: packages. 
    await axios.get("/packages")
      .then(res => {
        let packages = [];
        for (let i of res.data) {
          packages[i.id] = {
            name: i.name, 
            description: i.description, 
            price: i.price, 
            gradient: i.gradient
          };
        };
        
        this.setState(state => ({
          login: state.login,
          packages: packages
        }));
    });
  };

  render() {
    console.log(this.state);

    return (
     <Router>
     <Header user={this.state.login.user} info={this.state.login.info} loggedin={this.state.login.loggedin}/> 
        <Switch>
          <Route path="/" render={props => (<Shop packages={this.state.packages}/>)}/>
          <Route path="/polityka-prywatnosci" component={Privacy}/>
          <Route path="/regulamin" component={Terms}/>
        </Switch>
        <Footer/>
      </Router>
    )
 }
}

export default App;
