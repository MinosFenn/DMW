import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import DNAlogo from '../images/MDMA.png' 
import React from "react"
import Navigation from './Navigation.js'
import { HeaderWrapper } from './styles/HeaderStyles';


const Header = () => {
 
 const {
   site,
   menu: {
     edges: [{ node: menu}],
   },
 } = useStaticQuery(graphql`
 query HeaderQuery {
   site { 
     siteMetadata {
       title
     }
   }
   menu: allWordpressWpApiMenusMenusItems(
     filter: {wordpress_id: { eq: 5}}
   ) {
     totalCount
     edges {
       node {
         items {
           title
           url
           wordpress_children {
             title 
             url
           }
         }
       }
     }
   }
 }
 
 `
 
 )
  return (
<HeaderWrapper>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <Link to="/">
          <img src={DNAlogo} alt={site.siteMetadata.title}></img>
        </Link>
      </div>
    <div className="col-md-8 menu">
      <Navigation menu={menu} />
    </div>
    </div>
  </div>
</HeaderWrapper>
  )
}

export default Header
