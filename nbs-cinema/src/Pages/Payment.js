import React, { Component } from 'react';

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
<div>
            <div className="row info">
                <div className="col-sm-4"><label className="reserved">
                    <input type="checkbox" className="cust-checkbox" disabled/>
                    <span></span>Reserve Seat </label>
                </div>
                <div className="col-sm-4">
                    <label className="selected"><input type="checkbox" className="cust-checkbox" disabled/>
                    <span></span>Selected Seat</label>
                </div>
                <div className="col-sm-4"><label>
                    <input type="checkbox" className="cust-checkbox" disabled/>
                    <span></span>Empty Seat </label>
                </div>
            </div>

            <div className="seats">
            <div className="row">
            <div className="col-sm-4">
            <label>
            <input type="checkbox" className="cust-checkbox"/>
            <span></span></label>

        <label>
        <input type="checkbox" className="cust-checkbox"/>
            <span></span>
        </label>
        <label className="reserved">
            <input type="checkbox" className="cust-checkbox"/>
                <span></span>
        </label>
        </div>
        <div className="col-sm-4">
            <label>
                <input type="checkbox" className="cust-checkbox"/>
                    <span></span>
            </label>
            <label className="reserved">
                <input type="checkbox" className="cust-checkbox"/>
                    <span></span>
            </label>
            <label>
                <input type="checkbox" className="cust-checkbox"/>
                    <span></span>
            </label>
        </div>
        <div className="col-sm-4">
            <label className="reserved">
                <input type="checkbox" className="cust-checkbox"/>
                    <span></span>
            </label>
            <label>
                <input type="checkbox" className="cust-checkbox"/>
                    <span></span>
            </label>
            <label>
                <input type="checkbox" className="cust-checkbox"/>
                    <span></span>
            </label>
        </div>
    </div>
    </div>
</div>

    )
    }
    }

export default Payment