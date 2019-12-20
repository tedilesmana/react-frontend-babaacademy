import React, { Component } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBFormInline,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
class Navbar extends Component {
    state = {
        isOpen: false
    };
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <Router>
    <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">Babastudio</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <span className="mr-2">Categories</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href="#!">Design</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Digital Marketing</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Programming Front End</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Programming Back End</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Mobile</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Video Editing</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Database</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>
            <span className="active-light-3 active-dark-4">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </span>
            <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                        Techfor Community
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon icon="shopping-cart" />
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                        Login
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                        Sign Up
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
</Router>
        )
    }
}
export default Navbar;