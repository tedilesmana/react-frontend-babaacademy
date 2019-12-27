import React, { Component } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {
        isOpen: false
    };
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <MDBNavbar color="indigo" dark expand="md" id="navbar">
        <MDBNavbarBrand id="nav">
        <Link to="/">
            <img src={require('../../assets/img/logo.png')} alt="babastudio" className="img-fluid" />
        </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left id="nav-left">
                <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav>
                            <span className="mr-2" id="kategori">
                                <i className="fa fa-th mr-1"></i>Categories
                            </span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-menu" role="menu" aria-labelledby="navbarDropdown">
                            <MDBDropdownItem href="#!">Design</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Digital Marketing</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Programming Front End</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Programming Back End</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Mobile</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Video Editing</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Database</MDBDropdownItem>
                            <MDBDropdownItem id="submenu">Paket Kursus<i className="fa fa-chevron-right" aria-hidden="true"></i>
                                <ul className="dropdown-submenu">
                                    <li className="dropdown-subitem">
                                        <Link to="" className="">Paket Kursus Progamming</Link>
                                    </li>
                                    <li className="dropdown-subitem">
                                        <Link to="" className="">Paket Kursus Internet Marketing</Link>
                                    </li>
                                </ul>
                            </MDBDropdownItem>
                            <MDBDropdownItem id="submenu">Chat Realtime<i className="fa fa-chevron-right" aria-hidden="true"></i>
                                <ul className="dropdown-submenu">
                                    <li className="dropdown-subitem"><Link to="" className="">1 Minggu</Link></li>
                                    <li className="dropdown-subitem"><Link to="" className="">2 Minggu</Link></li>
                                    <li className="dropdown-subitem"><Link to="" className="">4 Minggu</Link></li>
                                </ul>
                            </MDBDropdownItem>
                            <MDBDropdownItem href="#!">All Courses<i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </MDBNavbarNav>
            <span className="active-light-3 active-dark-4" id="search">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                <i className="fas fa-search"></i>
            </span>
            <MDBNavbarNav right id="right-nav">
                <MDBNavItem className="mr-5">
                    <MDBNavLink className="waves-effect waves-light" to="/list_course" id="tech">
                        All My Courses
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!" id="cart">
                        <MDBIcon icon="shopping-cart" className=""/>
                        <span className="b-count"><small className="count">0</small></span>
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!">
                        Login
                    </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="#!" id="signup">
                        Sign Up
                    </MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
        )
    }
}
export default Navbar;