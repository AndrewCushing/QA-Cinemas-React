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
        console.log("Some Data: " + Forename+Surname+EmailAdd+Subject+Message);
        let EmailResponse =  EmailService.sendEmailToPO(Forename,Surname,EmailAdd,Subject,Message);
        console.log(EmailResponse);
    };

    render() {
        const {Forename,Surname,EmailAdd,Subject,Message,EmailResponse} =this.state;
        return (<>
                <div >
                    <label>{EmailResponse}</label>
                    <form onSubmit={this.handleSubmit} >
                        <h1>Email</h1>
                        <input required type="text" className="form-control" name ="Forename" id={"Forename"} maxLength="30"  placeholder="Forename" value={Forename} onChange={this.handleOnChange} />
                        <input required type="text" className="form-control"  name ="Surname" id={"Surname"} maxLength="30" placeholder="Surname" value={Surname} onChange={this.handleOnChange}/>
                        <input required type="email" className="form-control"  name ="EmailAdd" id={"EmailAdd"} maxLength="50" placeholder="name@example.com" value={EmailAdd} onChange={this.handleOnChange}/>
                        <input required type="text" className="form-control"  name ="Subject" id={"Subject"} maxLength="20" placeholder="Subject" value={Subject} onChange={this.handleOnChange}/>
                        <textarea rows="7" cols="58" className="form-control"  name ="Message" id={"Message"}
                                  maxLength="200" placeholder="Enter your message here" value={Message} onChange={this.handleOnChange} required></textarea>
                        <input className="popup" type="submit" value="Submit"/>
                        <br/>
                        <br/>
                        <br/>


                    </form>
                </div>

            </>
        )
    }
}

export default EMail