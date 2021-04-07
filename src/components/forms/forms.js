import React from "react";
import "./forms.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      name: "",
      surname: "",
      address: "",
      email: "",
      acceptTerms: false,
      paymentMethod:"hotpay",
      acceptPurchase: false
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

  validateName(name) {
    return /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(name);
  };

  validateEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  };

  async handleSubmit(event) {
    let data = {
      name: this.state.name, 
      surname: this.state.surname, 
      address: this.state.address, 
      email: this.state.email, 
      terms: this.state.acceptTerms, 
      paymentMethod: this.state.paymentSelect, 
      acceptPurchase: this.state.acceptPurchase
    };

    // check: user is valid. 
    if (!this.props.user) {
      console.log("Nie jesteś zalogowany!");
      return;
    };

    // check: package id is valid. 
    if (!this.props.id) {
      console.log("Niepoprawny ID pakietu!");
      return;
    };

    // check: first name validity. 
    if (this.validateName(data.name) === false) {
      console.log("Nieprawidłowe imię!");
      return;
    };

    // check: surname validity. 
    if (this.validateName(data.surname) === false) {
      console.log("Nieprawidłowe nazwisko!");
      return;
    };

    // check: e-mail validity. 
    if (this.validateEmail(data.email) === false) {
      console.log("Nieprawidłowy e-mail!");
      return;
    };

    // check: terms accepted. 
    if (data.terms !== true) {
      console.log("Regulamin nie został zaakceptowany!");
      return;
    };

    // check: payment intent. 
    if (data.acceptPurchase !== true) {
      console.log("Obowiązek zapłaty nie został wypełniony!");
      return; 
    };

    console.log("USER: " + this.props.user.id);
    console.log("ID: " + this.props.id);
    
    event.preventDefault();

    // @TODO: SUBMIT ORDER INTENT TO SERVER.
  };

  render() {
    return (
      <div class="forms-container">
       <h1 class="forms-main-text">ZAMÓWIENIE - {this.props.name.toUpperCase()}</h1>
       <form class="main-form" autoComplete="off" onSubmit={this.handleSubmit}>
       
        <div class="input-container">
          <label class="input-label">Imię</label>
          <input class="input-space" name="name" type="text" placeholder="Wpisz swoje imie." value={this.state.nameInput} onChange={this.handleChange}/>
        </div>

        <div class="input-container">
          <label class="input-label">Nazwisko</label>
          <input class="input-space" name="surname" type="text" placeholder="Wpisz swoje nazwisko." value={this.state.surnameInput} onChange={this.handleChange} />
        </div>

        <div class="input-container">
          <label class="input-label">Adres</label>
          <input class="input-space" name="address" type="text" placeholder="Wpisz swój adres." value={this.state.addressInput} onChange={this.handleChange} />
        </div>

        <div class="input-container">
          <label class="input-label">E-Mail</label>
          <input class="input-space" name="email" type="text" placeholder="Wpisz swój adres e-mail." value={this.state.emailInput} onChange={this.handleChange} />
        </div>

        <div class="paymentContainer">
          <label>Metody Płatności</label>
          <select class="paymentSelect" name="paymentMethod" value={this.state.paymentSelect} onChange={this.handleChange}> 
            <option value="hotpay">HotPay</option>
            <option value="sms">SMS</option>
            <option value="psc">Paysafecard</option>
            <option value="btc">Bitcoin</option>
          </select> 
        </div>

        <div class="checkbox-container">
          <input type="checkbox" name="acceptTerms" checked={this.state.acceptTerms} onChange={this.handleChange} ></input>
          <label for="acceptTerms">Akceptuję Regulamin i Politykę Prywatności</label>
        </div>

        <div class="checkbox-container">
          <input type="checkbox" name="acceptPurchase" checked={this.state.acceptPurchase} onChange={this.handleChange} ></input>
          <label for="acceptPurchase">Zamawiam z obowiązkiem zapłaty</label>
        </div>

        <div class="forms-info">Wszystkie pola są wymagane</div>
        <div class="forms-accept-div">
         <input class="forms-accept" type="submit" value="Submit"></input>
        </div>
       </form>
      </div>
    );
  }
}

export default Form;
