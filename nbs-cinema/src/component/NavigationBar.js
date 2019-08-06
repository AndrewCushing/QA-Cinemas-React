import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand,MDBIcon, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import styled from 'styled-components';
const Logo = '/qacinemalogo.png'

const Styles = styled.div`
.navbar {
    background: black;
    margin-bottom: 0px;
    
    
 .navbar-brand>img {
    padding:20px;
    margin-top:20px;
    margin-bottom: 15px;
} 
    
}
.navbar-collapse {
    background: black; 
   
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
                <MDBNavbar color="indigo" dark expand="md">
                    <MDBNavbarBrand href = "/" ><img style={{ }} src={Logo}  height="100"alt="Luna Cinema's" id={"Nav_Logo"} />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>

                            <MDBNavItem>
                                <MDBNavLink to="/Screens" id={"Screens_Link"}><b>Screens</b></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/CurrentFilms" id={"CurrentFilms_Link"}><b>Current Films</b></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/UpcomingFilms" id={"UpcomingFilms_Link"}><b>Upcoming Films</b></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/OpeningTimes" id={"OpeningTimes_Link"}><b>Opening Times</b></MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBFormInline waves onSubmit={this.performSearch}>
                                    <div className="md-form my-0">
                                        <input id="searchBar" className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                    <MDBIcon className="text-white" style ={{paddingLeft:"10px"}}size = "2x" icon="search" />

                                </MDBFormInline>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Styles>
        );
    }
}