import React, { Component } from 'react';
import '../styles/ContactComponent.css';
import EmailService from '../services/EmailService';

class EMail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Forename:"",
            Surname:"",
            EmailAdd:"",
            Subject:"",
            Message:"",
            EmailResponse:""
        }
    };

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        // const data = new FormData( event.target);
        const {Forename,Surname,EmailAdd,Subject,Message} = this.state;
        console.log("Sending email. Please wait: " + Forename+Surname+EmailAdd+Subject+Message);

        let senderName = Forename + " " + Surname;
        let labelMessage = "Sending Email. Please wait a moment";
        this.setState({EmailResponse: labelMessage});
        labelMessage = "";

        fetch('http://localhost:8080/sendEmail', {
            method: 'POST',
            headers: { "Accept": "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({"senderName": senderName, "fromEmail": EmailAdd, "subject": Subject, "message": Message})
        })
            .then(res => res.json() )
            .catch(results => {
                console.log(results);
                labelMessage = "An Error occurred. \nPlease try again later";
            })
            .then(results => {
                if (labelMessage.length == 0){
                    labelMessage = results.response;
                }
               this.setState({
                   Forename:"",
                   Surname:"",
                   EmailAdd:"",
                   Subject:"",
                   Message:"",
                   EmailResponse: labelMessage
            });
        });
    };
    render() {
        const {Forename,Surname,EmailAdd,Subject,Message,EmailResponse} =this.state;

        return (
                <div>
                    <label>{EmailResponse}</label>
                    <br/>
                    <form id={"emailForm"} onSubmit={this.handleSubmit} >
                        <h1>Email</h1>
                        <input required type="text" className="form-control" name ="Forename" id={"Forename"} maxLength="30"  placeholder="Forename" value={Forename} onChange={this.handleOnChange} />
                        <input required type="text" className="form-control"  name ="Surname" id={"Surname"} maxLength="30" placeholder="Surname" value={Surname} onChange={this.handleOnChange}/>
                        <input required type="email" className="form-control"  name ="EmailAdd" id={"EmailAdd"} maxLength="500" placeholder="name@example.com" value={EmailAdd} onChange={this.handleOnChange}/>
                        <input required type="text" className="form-control"  name ="Subject" id={"Subject"} maxLength="20" placeholder="Subject" value={Subject} onChange={this.handleOnChange}/>
                        <textarea rows="7" cols="58" className="form-control"  name ="Message" id={"Message"}
                                  maxLength="200" placeholder="Enter your message here" value={Message} onChange={this.handleOnChange} required></textarea>
                        <input className="popup" type="submit" value="Submit"/>

                         <br/><label className={EmailResponse} id={EmailResponse}>{EmailResponse}</label>
                         <br/>
                        <br/>
                    </form>
                </div>
        )
    }
}

export default EMail;