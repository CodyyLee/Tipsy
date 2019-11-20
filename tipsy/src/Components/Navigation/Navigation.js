import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem";

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    background-color: #2b2b28;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export default function Navigation() {

    return (
        <Nav>
            <NavItem link="/" name="Home"/>
            <NavItem link="/Discover" name="Discover"/>
        </Nav>
    )
}