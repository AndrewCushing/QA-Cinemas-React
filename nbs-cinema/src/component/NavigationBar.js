import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline} from "mdbreact";
import styled from 'styled-components';
const Logo = '/qacinemalogo.png'

const Styles = styled.div`
.navbar {
    background: black;
    margin-bottom: 0px;
    padding:20px;
    
    }
    
 .nav-item {
 padding:5px;
  margin: 0 auto;
 }
 
 
.NavSearch {

font-size: 20px;
margin-left:29px;

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
                <MDBNavbar fluid color="indigo" dark expand="md">
                    <MDBNavbarBrand href = "/" ><img style={{width:150 }} src={Logo} alt="Luna Cinema's" />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <MDBNavLink to="/Home"><b>Home</b></MDBNavLink>
                            </MDBNavItem>
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
                                <MDBFormInline className="NavSearch" onSubmit={this.performSearch}>
                                    <div className="md-form my-0">
                                        <div id="Search"><input id="searchBar" className="searchBar" type="text" placeholder=" Search..." aria-label="Search" />
                                        </div>
                                        <div id="Magnify"></div><button type="button" onClick={this.performSearch} className="btn btn-default"><span className="glyphicon glyphicon-search"></span>
                                        </button>
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