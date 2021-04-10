import React from "react";
import {Redirect} from "react-router-dom";
import "./help.css";

class Help extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  
        order:"",
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };
  
    handleChange(event) {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }
  
    // @TODO: Post to API. 
       handleSubmit() {

    };

    // @TODO: Render help form. 
    // this.props.orders.
  
    render() {
        if (!this.props.login || this.props.login.loggedin !== true || !this.props.login.user) {
            return <Redirect to="/"/>
        };
      return (
        <div class="help-container">
         <h1 class="help-main-text">CENTRUM POMOCY</h1>
         <form class="help-form" autoComplete="off" onSubmit={this.handleSubmit}>

          <div class="help-orderSelect">
            <label>Wybierz zamówienie</label>
            <select class="orderSelect" name="order" value={this.state.order} onChange={this.handleChange}> 
                {this.props.orders.map((val, key) =>{
                return (
                    <option value={val.package}>{val.package}</option>
                    );
                 })}
            </select> 
            </div>

            <div class="help-text-container">
                <label class="help-label">Opisz swój problem</label>
                <input class="help-space" name="name" type="text" placeholder="Opisz swój problem." value={this.state.nameInput} onChange={this.handleChange}/>
            </div>

            <div class="help-accept-div">
                <input class="help-accept" type="submit" value="Submit"></input>
            </div>
         </form>
        </div>
      );
    }
  }
  
  export default Help;
  