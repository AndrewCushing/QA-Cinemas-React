import React, { Component } from 'react';
// import HomeService from '../service/HomeService';

class HomeComponent extends Component {
    state = {
       
    };

    componentDidMount() {

        // HomeService.executeGetService()
        //     .then(response => {
        //         this.setState({
        //             homes: response.data
        //         })
        //     })
    };

    // gotoBeanComponent = () => {
    //     this.props.history.push('/add-home')
    // }

    // deleteHome = (id) => {
    //     HomeService.executeDeleteService(id)
    //         .then(response => {
    //             this.setState({
    //                 homes: response.data
    //             })
    //         })
    // }

    render() {
        return (
            <div>
                <h1>Home Component</h1>
                {/*<div>*/}

                {/*    <ul className = "list-group">*/}
                {/*        {this.state.home.map(home => <li className = "list-group-item" key={home.id}>home: {home.homeName} <button className="btn btn-danger float-right"onClick={() => {*/}
                {/*            this.deletehome(home.id)}}>x</button></li>)}*/}
                {/*    </ul>*/}
                {/*</div>*/}
                {/*<div className="float-right">*/}
                {/*    <button className="btn btn-success " onClick={this.gotoBeanComponent}>Add home</button>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default HomeComponent