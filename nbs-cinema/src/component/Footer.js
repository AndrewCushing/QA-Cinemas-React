import React, { Component } from "react";
import { MDBCol,MDBIcon, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from 'styled-components';

const Styles = styled.div`
.page-footer{
    background:#22465E;
     font-size:medium;
    
   
}

.FooterText{
    color: antiquewhite;  
}

.pb-3, .py-3 {

    background: black;
}

.ml-auto, .mx-auto {
    text-align: center;
}

.mb-4 {
    font-style:normal;
    color: antiquewhite;
    font-size:large;
}
.ul.list-unstyled  {
    font-style:normal;
    color: antiquewhite;
    
}
  `;


export default class AppFooter extends Component {
  render(){
    return (
        <Styles>
          <MDBFooter color=" pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
              <MDBRow className="my-4">
                <MDBCol md="2" lg="2" className="ml-auto">
                  <h5 className="mb-4 font-weight-bold" >Luna Cinemas</h5>
                  <ul className="list-unstyled">
                    <b>
                      <a className="FooterText" href="/">Home</a>

                    </b><br/>
                    <b>
                      <a className="FooterText" href="/About" id={"About_Link"}>About Us</a>
                    </b><br/>
                    <b>
                      <a className="FooterText" href="/Contact">Contact Us</a>
                    </b>
                  </ul>
                </MDBCol>
                <hr className="w-100 d-md-none" />
                <MDBCol md="2" lg="2" className="ml-auto">
                  <h5 className="mb-4 font-weight-bold" >Cinema Info</h5>
                  <ul className="list-unstyled">

                    <b>
                      <a className="FooterText" href="/Classifications" id={"Classifications_Link"}>Classifications</a>
                    </b><br/>
                    <b>
                      <a className="FooterText" href="/Travel" id={"GettingHere_Here"}>Getting Here</a>
                    </b><br/>
                    <b>
                      <a className="FooterText" href="/PlacesToGo" id={"Places_Link"}>Places To Go</a>
                    </b>
                  </ul>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none"/>
                <MDBCol md="6" lg="5" className="text-center">
                  <h5 className="mb-4 font-weight-bold" >
                    Follow us
                  </h5>
                  <div className="mt-2 ">
                    <a className="btn btn-link" href="#!">
                      <MDBIcon className="text-white" style ={{paddingLeft:"10px"}}size = "2x" icon="facebook" />
                    </a>
                    <a className="btn btn-link" href="https://twitter.com/TheLunaCinema?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                      <MDBIcon className="text-white" style ={{paddingLeft:"10px"}}size = "2x" icon="twitter" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid className="FooterText" >
                &copy; {new Date().getFullYear()} Luna Cinemas
              </MDBContainer>
            </div>
          </MDBFooter>
        </Styles>
    );
  }
}