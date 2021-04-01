import React from "react";
import "./forms.css";

class Froms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      surnameInput: "",
      adressInput: "",
      emailInput: "",
      acceptTerms: false,
      paymentSelect:"hotpay",
      acceptPurchase: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    console.log(this.state)
    event.preventDefault();
  }
  render() {
    return (
      <div class="forms-container">
       <h1 class="forms-main-text">ZAMÓWIENIE</h1>
       <form class="main-form" autocomplete="off" onSubmit={this.handleSubmit}>
       
        <div class="input-container">
          <label class="input-label">Imię</label>
          <input class="input-space" name="nameInput" type="text" placeholder="Wpisz swoje imie." value={this.state.nameInput} onChange={this.handleChange}/>
        </div>

        <div class="input-container">
          <label class="input-label">Nazwisko</label>
          <input class="input-space" name="surnameInput" type="text" placeholder="Wpisz swoje nazwisko." value={this.state.surnameInput} onChange={this.handleChange} />
        </div>

        <div class="input-container">
          <label class="input-label">Adres</label>
          <input class="input-space" name="adressInput" type="text" placeholder="Wpisz swój adres." value={this.state.adressInput} onChange={this.handleChange} />
        </div>

        <div class="input-container">
          <label class="input-label">E-Mail</label>
          <input class="input-space" name="emailInput" type="text" placeholder="Wpisz swój adres e-mail." value={this.state.emailInput} onChange={this.handleChange} />
        </div>

        <div class="paymentContainer">
          <label>Metody Płatności</label>
          <select class="paymentSelect" name="paymentSelect" value={this.state.paymentSelect} onChange={this.handleChange}> 
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

export default Froms;
