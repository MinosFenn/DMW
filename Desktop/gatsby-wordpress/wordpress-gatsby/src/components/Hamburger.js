import React from "react"

import PropTypes from "prop-types"
import { HamburgerButton } from './styles/HamburgerStyles';
import HamburgerDNA from '../images/favicon2.png';

const Hamburger = ({ handleOverlayMenu }) => (
<HamburgerButton onClick={handleOverlayMenu} tabIndex="0">
<img src={HamburgerDNA} alt="tango-hamburger" />
</HamburgerButton>
)
Hamburger.propTypes = {
    handleOverlayMenu: PropTypes.func,
};


export default Hamburger