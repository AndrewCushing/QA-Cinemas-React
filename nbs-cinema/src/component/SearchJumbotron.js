import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(/Moon.jpg) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 150px;
    position: relative;
    z-index: 0;
    
    
    }

  .overlay {
    background-color: #00000099;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    box-shadow: inset 0px 0px 9px 11px #031E31;
  }
`;

export const SearchJumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1> Search Results </h1>
            </Container>
        </Jumbo>
    </Styles>
)