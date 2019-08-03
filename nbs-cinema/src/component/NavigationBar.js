import React from 'react';
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'; 
import styled from 'styled-components';
import Logo from '../images/qacinemalogo.png'
import { MDBCol, MDBIcon } from "mdbreact";



const Styles = styled.div`
.navbar {
    background: white; 
    background-colour: #222;
    
}

.navbar-collaspe:
    background: red;

.navbar-brand, navbar-nav .nav-link {
    color:#bbb;

    &:hoover{
        color: #fff;
     }
   }
  `;

 export const NavigationBar = () => (
    <Styles>
         <Navbar expand="md">
             <Navbar.Brand href = "/" ><img style={{ }} src={Logo}  height="100"alt="Luna Cinema's" /></Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto">
                     <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link href="/Screens">Screens</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link href="/CurrentFilms">Current Films</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link href="/UpcomingFilms">Upcoming Films</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link href="/OpeningTimes">Opening Times</Nav.Link></Nav.Item>
                 </Nav>
                 <MDBCol md="6">
                    <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3" id="basic-text1">
                    <MDBIcon className="text-white" icon="search" />
                </span>
                    </div>
                    <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </MDBCol>
             </Navbar.Collapse>
            
         </Navbar>
          
     </Styles> 
 )