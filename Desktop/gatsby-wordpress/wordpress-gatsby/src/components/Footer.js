import { Link,  } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FooterWrapper } from './styles/FooterStyles';
import DNAlogo from '../images/MDMA.png' 


const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <img src={DNAlogo} alt="DNAgency-logo"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h2 className="whiteText">Lorem ipsum</h2>
        </div>
        <div className="col-md-4">
          <h2 className="whiteText">Lorem ipsum</h2>
      </div>
        <div className="col-md-4">
          <h2 className="whiteText">Lorem ipsum</h2>
      </div>
    </div>
    </div>

  </FooterWrapper>

  )


export default Footer