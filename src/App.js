import "./app.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Shop from "./pages/shop/shop";
import Privacy from "./pages/privacy/privacy";
import Terms from "./pages/terms/terms";
import Loader from "react-loader-spinner";
import Order from "./pages/order/order";
import History from "./pages/history/history";
import Page404 from "./pages/page404/page404";
import Help from "./pages/help/help";

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
      orders: [],
      loaded: false
    };
  };

  async getOrders() {
    axios.get("/orders", {withCredentials: true})   
      .then(async res => {
          this.setState(state => ({
              login: state.login,
              packages: state.packages,
              orders: res.data,
              loaded: state.loaded
          }));
      })
      .catch(err => {
          if (err === 401) {
              window.location.assign("/login");
              return; 
          };
      });
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
              orders: state.orders,
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
              orders: state.orders,
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
            orders: state.orders,
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
          orders: state.orders,
          loaded: state.loaded
        }));
    });
  };

  async componentDidMount() {
    // fetch: login status. 
    await this.getLogin();
    
    // fetch: packages.
    await this.getPackages(); 

    // fetch: orders. 
    await this.getOrders();

    // task: remove loading screen.
    this.setState(state => ({
      login: state.login,
      packages: state.packages,
      orders: state.orders,
      loaded: true
    }));
  };

  render() {
    if (this.state.loaded === false) {
      return (
        <Loader
          className = "loader"
          type="TailSpin"
          color="var(--accent2)"
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
            <Route path="/historia-zamowien" render={props => (<History login={this.state.login} orders={this.state.orders}/>)}/>
            <Route path="/centrum-pomocy" render={props => (<Help login={this.state.login} orders={this.state.orders}/>)}/>
            <Route path="/zamowienie" render={props => (<Order {...props}/>)}/>
            <Route component={Page404} />
          </Switch>
        <Footer/>
        </Router>
      </>
    )
 }
}

export default App;
