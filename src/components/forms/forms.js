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
      acceptPurchase: false,

      errorName: false,
      errorSurname: false,
      errorAddress: false,
      errorEmail: false,
      errorAcceptTerms: false,
      errorPayment: false,
      errorAcceptPurchase: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  validate() {
    let errorName = false;
    let errorSurname = false;
    let errorAddress = false;
    let errorEmail = false;
    let errorAcceptTerms = false;
    let errorPayment = false;
    let errorAcceptPurchase = false;

    if (!this.state.name) {
      errorName =  true;
    }

    if (!this.state.surname) {
      errorSurname =  true;
    }

    if (!this.state.address) {
      errorAddress =  true;
    }

    if (!this.state.email) {
      errorEmail =  true;
    }

    if (!this.state.acceptTerms) {
      errorAcceptTerms =  true;
    }

    if (!this.state.acceptPurchase) {
      errorPayment =  true;
    }
    
    if (!this.state.paymentMethod) {
      errorAcceptPurchase =  true;
    }
   
    if ( errorName || errorSurname || errorAddress || errorEmail || errorAcceptTerms || errorPayment || errorAcceptPurchase) {
      this.setState({ errorName, errorSurname, errorAddress, errorEmail, errorAcceptTerms, errorPayment, errorAcceptPurchase });
      return false;
    }

    return true;
  };

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
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
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
          <label className={this.state.errorName ? "input-error label" : "input-error"}>Podaj swoje imię!</label>
          <input className={this.state.errorName ? "input-space error" : "input-space"}  name="name" type="text" placeholder="Wpisz swoje imie." value={this.state.nameInput} onChange={this.handleChange}/>
        </div>

        <div class="input-container">
          <label class="input-label">Nazwisko</label>
          <label className={this.state.errorSurname ? "input-error label" : "input-error"}>Podaj swoje nazwisko!</label>
          <input className={this.state.errorSurname ? "input-space error" : "input-space"} name="surname" type="text" placeholder="Wpisz swoje nazwisko." value={this.state.surnameInput} onChange={this.handleChange} />
        </div>

        <div class="input-container">
          <label class="input-label">Adres</label>
          <label className={this.state.errorAddress ? "input-error label" : "input-error"}>Podaj swój adres!</label>
          <input className={this.state.errorAddress ? "input-space error" : "input-space"} name="address" type="text" placeholder="Wpisz swój adres." value={this.state.addressInput} onChange={this.handleChange} />
        </div>

        <div class="input-container">
          <label class="input-label">E-Mail</label>
          <label className={this.state.errorEmail ? "input-error label" : "input-error"}>Podaj swój email!</label>
          <input className={this.state.errorEmail ? "input-space error" : "input-space"} name="email" type="text" placeholder="Wpisz swój adres e-mail." value={this.state.emailInput} onChange={this.handleChange} />
        </div>

        <div class="paymentContainer"> 
          <label>Metody Płatności</label>
          <label className={this.state.errorPayment ? "payment-error label" : "payment-error"}>Wybierz formę płatności!</label>
          <select className={this.state.errorPayment ? "paymentSelect error" : "paymentSelect"} name="paymentMethod" value={this.state.paymentSelect} onChange={this.handleChange}> 
            <option value="hotpay">HotPay</option>
            <option value="sms">SMS</option>
            <option value="psc">Paysafecard</option>
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
         <input class="forms-accept" type="submit" value="ZŁÓŻ ZAMÓWIENIE"></input>
        </div>
       </form>
      </div>
    );
  }
}

export default Form;
