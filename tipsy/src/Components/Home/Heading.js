import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Head = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0,0,0, 0.5);
`

const Title = styled.h1`
    text-align: center;
    color: #f1d6ab;
    width: 90%;
`

const Button = styled.button`
    padding: 10px 25px;
    background-color: #e3b04b;
    color: #2b2b28;
    font-size: 1.5rem;
    border: 1px solid #2b2b28;
    border-radius: 10px;
`

export default function Heading() {

    return (
        <Head>
            <Title>Discover The World Of Tipsy</Title>

            <Link to="/Discover">
                <Button>Get Tipsy</Button>
            </Link>
        </Head>
    )
}