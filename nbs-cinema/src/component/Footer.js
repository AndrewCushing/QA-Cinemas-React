import React, { Component } from "react";
import { MDBCol,MDBIcon, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from 'styled-components';

const Styles = styled.div`
.page-footer{
    background:#22465E;
}

.FooterText{
    color: antiquewhite;  
}

.mb-4 {
    font-style:normal;
    color: antiquewhite;
    font-size:12px;
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
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2" lg="2" className="ml-auto">
                  <h5 className="mb-4 font-weight-bold"  style={{ textDecoration: "underline"}}>About</h5>
                  <ul className="list-unstyled">
                    <p>
                      <a className="FooterText" href="/About">About Us</a>
                    </p>
                    <p>
                      <a className="FooterText" href="/Contact">Contact Us</a>
                    </p>
                    <p>
                      <a className="FooterText" href="/Scrum">Scrum Description</a>
                    </p>
                    <p>
                      <a className="FooterText"href="/DiscussionBoard">Discussion Board</a>
                    </p>
                  </ul>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2" lg="2" className="ml-auto">
                  <h5 className="mb-4 font-weight-bold"  style={{ textDecoration: "underline"}}>Cinema Information</h5>
                  <ul className="list-unstyled">
                    <p>
                      <a className="FooterText" href="/Classifications">Classification</a>
                    </p>
                    <p>
                      <a className="FooterText" href="/Directions">Directions</a>
                    </p>
                    <p>
                      <a className="FooterText" href="/PlacesToGo">Places To Go</a>
                    </p>
                  </ul>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="5" lg="3">
                  <h5  className="mb-4 font-weight-bold" style={{ textDecoration: "underline"}}>Address</h5>
                  <p className="FooterText">
                    <i className="fa fa-home mr-3" />Alexandra House, Wroughton, Swindon SN4 0QJ
                  </p>
                  <p className="FooterText">
                    <i className="fa fa-phone mr-3" /> +44 1234 567890
                  </p>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2" lg="2" className="text-center">
                  <h5 className="mb-4 font-weight-bold"  style={{ textDecoration: "underline"}}>
                    Follow us
                  </h5>
                  <div className="mt-2 ">
                    <a className="btn btn-link" href="#!">
                      <MDBIcon className="text-white" style ={{paddingLeft:"10px"}}size = "2x" icon="facebook" />
                    </a>
                    <a className="btn btn-link" href="">
                      <MDBIcon className="text-white" style ={{paddingLeft:"10px"}}size = "2x" icon="twitter" />
                    </a>
                  </div>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid className="FooterText" >
                &copy; {new Date().getFullYear()} Luna Cinema's
              </MDBContainer>
            </div>
          </MDBFooter>
        </Styles>
    );
  }
}