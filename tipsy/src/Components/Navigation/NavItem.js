import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Item = styled.div`
    
    a {
        color: #f1d6ab;
        text-decoration: none;
    }
`

export default function NavItem(props) {

    return (
        <Item>
            <NavLink to={props.link}>
                {props.name}
            </NavLink>
        </Item>
    )
}