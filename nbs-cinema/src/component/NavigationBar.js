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
    padding: 25px;
    margin-bottom:0px;
    
}
.navbar-collapse {
    background: black; 
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
                    <MDBNavbarBrand href = "/" ><img style={{ }} src={Logo}  height="100"alt="Luna Cinema's" />
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