import React from "react";
import styled from "styled-components";

import img from "../../Images/landing.jpg";

import Heading from "./Heading";

const Container = styled.div`
    width: 100%;
    height: 80vh;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
`

export default function Landing() {

    return (
        <Container>
            <Heading />
        </Container>
    )
}