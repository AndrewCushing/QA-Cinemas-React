import React from "react";
import styled from 'styled-components';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Styles = styled.div`
.page-footer{
    background:#22465E;
}
  `;

const Footer = () => {
  return (
      <Styles>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title5">Luna Cinema's</h5>
                <p>
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Cinema Information</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="/About">About Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Classification">Classification</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Contact">Contact Us</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/EMail">Email Form</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/GettingThere">Directions</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/PlacesToGo">Places To Go</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/Scrum">Scrum</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="/DiscussionBoard">Discussion Board</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: Luna Cinema's
            </MDBContainer>
          </div>
        </MDBFooter>
      </Styles>
  );
}

export default Footer;