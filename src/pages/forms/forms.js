import React from "react";
import {TextInput, CheckBox} from "../../components/textinput/textinput"
import "./forms.css";

class Froms extends React.Component {
  render() {
    return (
      <div class="forms-container">
       <h1 class="forms-main-text">JAKIS TEKST</h1>
       <form class="main-form">
        <TextInput title="Imię" placeholder="Wpisz swoje imię"/>
        <TextInput title="Nazwisko" placeholder="Wpisz swoje nazwisko"/>
        <TextInput title="Email" placeholder="Wpisz swój adres email"/>
        <TextInput title="Adres" placeholder="Wpisz swój adres zamieszkania"/>

        <CheckBox text="Akcpetuję regulamin i politykę prywatności"/>
        <CheckBox text="Zamawiam z obowiązkiem zapłaty"/>
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
