import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand,MDBIcon, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline} from "mdbreact";
import styled from 'styled-components';
const Logo = '/qacinemalogo.png'

const Styles = styled.div`
.navbar {
    background: black;
    margin-bottom: 0px;
    padding:20px;
    }
    

    
 .nav-item {
 padding:10px;
 }
    
 .navbar-brand>img {
    margin-top:20px;
    margin-bottom: 15px;
} 
    
}
.navbar-collapse {
    background: black; 
    margin-top: 20px;
   
}

.navbar-nav .nav-link {
    color: #36A1CF;
    font-size: x-large;
 
}

.navbar-toggler:not(:disabled):not(.disabled) {
    margin-left:auto;
    margin-right:40px;
}

.input {
   width:100%;
}

  `;

export default class NavigationBar extends Component {
    constructor(){
        super();
        this.state={
            searchText:""
        };
        this.performSearch = this.performSearch.bind(this);
    }

    performSearch(event){
        event.preventDefault();
        console.log("hi");
        window.location=('http://localhost:3000/search/'+document.getElementById("searchBar").value);
    };

    state = {
        isOpen: false
    };
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Styles>
                <MDBNavbar color="indigo" dark expand="md">
                    <MDBNavbarBrand href = "/" ><img style={{width:150 }} src={Logo}  height="100"alt="Luna Cinema's" />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>

                            <MDBNavItem>
                                <MDBNavLink to="/Screens"><b>Screens</b></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/CurrentFilms"><b>Current Films</b></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/UpcomingFilms"><b>Upcoming Films</b></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/OpeningTimes"><b>Opening Times</b></MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBFormInline waves onSubmit={this.performSearch}>
                                    <div className="md-form my-9230">
                                        <input id="searchBar" className="form-control mr-md-2" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                </MDBFormInline>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Styles>
        );
    }
}