import React from "react";
import styled from "styled-components";

import img from "../../Images/landing.jpg";
import logo from "../../Images/logo.png";

import Heading from "./Heading";

const Container = styled.div`
    width: 100%;
    height: 80vh;
    background: linear-gradient(
        rgba(0,0,0,0.0),
        rgba(0,0,0,0.9) 75%
    ), url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1199px) {
        background: linear-gradient(
            to right,
            rgba(0,0,0,0.9) 35%,
            rgba(0,0,0,0.0)
        ), url(${img});
        background-size: cover;
        background-repeat: no-repeat;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row-reverse;
    }
`

const Image = styled.img`
    width: 90%;
    margin-bottom: -30px;

    @media(min-width: 767px) {
        width: 60%;
        max-height: 80vh;
    }
`

export default function Landing() {

    return (
        <Container>
            <Image src={logo}/>
            <Heading />
        </Container>
    )
}