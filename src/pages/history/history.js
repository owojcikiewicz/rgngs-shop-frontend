import React from "react";
import "./history.css"
import {Redirect} from "react-router-dom";

class History extends React.Component {
    constructor(props) {
        super(props);
    };
    timeConverter(UNIX_timestamp){
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let time = date + '.' + month + '.' + year + ' ' + hour + ':' + min;
        return time;
      }

    parseStatus(status) {
        switch(status) {
            case "NEW":
                return {color: "var(--new)", lang: "NOWE"};
            
            case "PENDING":
                return {color: "var(--pending)", lang: "OCZEKUJĄCE"};

            case "SUCCESS":
                return {color: "var(--success)", lang: "ZAKOŃCZONE"};

            case "FAILURE":
                return {color: "var(--failure)", lang: "ANULOWANE"};

            default: 
                return {color: "", lang: ""};
        };
    };

    render() {
        if (!this.props.login || this.props.login.loggedin !== true || !this.props.login.user) {
            return <Redirect to="/"/>
        };

        // @TODO: Render history.
        // this.props.orders
        return (
            <div class="history-main">
                <h1 class="history-main-text">HISTORIA ZAMÓWIEŃ</h1>
                <div class="history-order-list">
                <table class="history-table">
                    <thead>
                        <tr>
                        <th>Data Zakupu</th>
                        <th>Pakiet</th>
                        <th>Metoda Płatności</th>
                        <th>Cena</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.orders.map((val, key) =>{
                    return (
                        <tr>
                            <td>{this.timeConverter(val.timestamp)}</td>
                            <td>{val.package}</td>
                            <td>{val.paymentMethod}</td>
                            <td>{val.price}</td>
                            <td style={{color:this.parseStatus(val.status).color}} >{this.parseStatus(val.status).lang}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    };
};

export default History;

