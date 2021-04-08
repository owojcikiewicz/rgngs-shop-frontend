import React from "react";
import "./history.css"
import {Redirect} from "react-router-dom";

class History extends React.Component {
    constructor(props) {
        super(props);
    };

    parseTimestamp(timestamp) {
        let date = new Date(timestamp * 1000);

        return date.toLocaleDateString("pl-PL", {month: "2-digit", day: "2-digit", year: "numeric"});
    };

    parseStatus(status) {
        switch(status) {
            case "new":
                return {color: "var(--new)", lang: "NOWE"};
            
            case "pending":
                return {color: "var(--pending)", lang: "OCZEKUJĄCE"};

            case "success":
                return {color: "var(--success)", lang: "ZAKOŃCZONE"};

            case "failure":
                return {color: "var(--failure)", lang: "ANULOWANE"};

            default: 
                return {color: "", lang: ""};
        };
    };

    parsePaymentMethod(method) {
        switch(method) {
            case "hotpay": 
                return "HotPay";

            case "paysafecard":
                return "Paysafecard";
            
            case "sms":
                return "SMS";

            default: 
                return "";
        };
    };

    render() {
        if (!this.props.login || this.props.login.loggedin !== true || !this.props.login.user) {
            return <Redirect to="/"/>
        };

        return (
            <div class="history-main">
                <h1 class="history-main-text">HISTORIA ZAMÓWIEŃ</h1>
                <div class="history-order-list">
                <table class="history-table">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Data Zakupu</th>
                        <th>Pakiet</th>
                        <th>Metoda Płatności</th>
                        <th>Cena</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.orders.map((val, key) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{this.parseTimestamp(val.timestamp)}</td>
                                <td>{val.package}</td>
                                <td>{this.parsePaymentMethod(val.paymentMethod)}</td>
                                <td>{val.price + " PLN"}</td>
                                <td style={{color:this.parseStatus(val.status).color}} >{this.parseStatus(val.status).lang}</td>
                            </tr>
                            );
                        })
                    }
                    </tbody>
                    </table>
                </div>
            </div>
        )
    };
};

export default History;

