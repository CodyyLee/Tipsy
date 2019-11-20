import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2b2b28;

    p {
        color: #f1d6ab;
    }
`

export default function Footer() {

    return (
        <Foot>
            <p>Tipsy 2019&copy;</p>
        </Foot>
    )
}