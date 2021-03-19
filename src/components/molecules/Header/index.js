import React from "react";
import { NavItem, NavLink } from "react-bootstrap";
import { Logo } from "../../../assets";
import './header.scss'


const Header = () => {
  return (
    <div className="navbar-wrapper">
        <div className="nav-logo">
            <img className="Logo" src={Logo} alt="logo"/>
        </div>
        <div className="nav-menu">
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
                <NavItem>
                <NavLink href="/about">About</NavLink>
            </NavItem>
                <NavItem>
                <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
                <NavItem>
                <NavLink href="/contact">Contact</NavLink>
            </NavItem>
        </div>
    </div>
  );
};

export default Header;
