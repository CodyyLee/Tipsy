import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Item = styled.div`
    
    a {
        color: #f8f8f8;
        text-decoration: none;

        &:hover {
            color: #e3b04b;
        }

        @media (min-width: 767px) {
            font-size: 1.5rem;
        }
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