import React from "react";
import axios from "axios";
import "./app.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Shop from "./pages/shop/shop";
import Privacy from "./pages/privacy/privacy";
import Terms from "./pages/terms/terms";
import Loader from "react-loader-spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        user: {}, 
        info: {}, 
        loggedin: false
      },
      packages: [],
      loaded: false
    };
  };

  async getInfo() {
    return new Promise(async (resolve, reject) => {
      await axios.get("/info")
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  async getLogin() {
    await axios.get("/login/user", {withCredentials: true}) 
      .then(async res => { 
        await this.getInfo()
          .then(info => {
            this.setState(state => ({
              login: {
                user: {id: res.data.id, rcoins: res.data.rcoins},
                info: info,
                loggedin: true
              },
              packages: state.packages,
              loaded: state.loaded
            }));
          })
          .catch(err => {
            this.setState(state => ({
              login: {
                user: {id: res.data.id, rcoins: res.data.rcoins},
                info: state.info,
                loggedin: true
              },
              packages: state.packages,
              loaded: state.loaded
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
            packages: state.packages,
            loaded: state.loaded
          }));
        };
      });
  };

  async getPackages() {
    await axios.get("/packages")
      .then(res => {
        let packages = [];
        for (let i of res.data) {
          packages[packages.length + 1] = {
            id: i.id,
            name: i.name, 
            description: i.description, 
            price: i.price, 
            gradient: i.gradient
          };
        };
        
        this.setState(state => ({
          login: state.login,
          packages: packages,
          loaded: state.loaded
        }));
    });
  };

  async componentDidMount() {
    // fetch: login status. 
    await this.getLogin();
    
    // fetch: packages.
    await this.getPackages(); 

    // task: remove loading screen.
    this.setState(state => ({
      login: state.login,
      packages: state.packages,
      loaded: true
    }));
  };

  render() {
    if (this.state.loaded === false) {
      return (
        <Loader
          type="Rings"
          color="#00BFFF"
          height={100}
          width={100}
        />
      ); 
    };

    return (
      <>
      <Router>
        <Header user={this.state.login.user} info={this.state.login.info} loggedin={this.state.login.loggedin}/> 
          <Switch>
            <Route exact path="/" render={props => (<Shop packages={this.state.packages} login={this.state.login}/>)}/>
            <Route path="/polityka-prywatnosci" render={props => (<Privacy/>)}/>
            <Route path="/regulamin" render={props => (<Terms/>)}/>
          </Switch>
        <Footer/>
        </Router>
      </>
    )
 }
}

export default App;
