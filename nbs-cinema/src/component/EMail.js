import React, { Component } from 'react';
import './ContactComponent.css';



class EMail extends Component {



    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (<>
                <div >
                    <form onSubmit={() => alert('Your form has been submitted')} >
                        <h1>Email</h1>
                        <input required type="text" className="form-control" id={"Forename"} maxlength="30" placeholder="Forename"/>
                        <input required type="text" className="form-control" id={"Surname"} maxlength="30" placeholder="Surname"/>
                        <input required type="email" className="form-control" id={"EmailAdd"} maxlength="50" placeholder="name@example.com"/>
                        <input required type="text" className="form-control" id={"Subject"} maxlength="20" placeholder="Subject"/>
                        <textarea rows="7" cols="58" className="form-control" id={"Message"}
                                  maxlength="200" placeholder="Enter your message here" required></textarea>
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