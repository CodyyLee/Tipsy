import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Head = styled.div`
    width: 80%;
    padding: 2.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    margin-bottom: 20px;
    animation-name: FadeIn;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;


    @keyframes FadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    @media (min-width: 1199px) {
        width: 35%;
    }
`

const Title = styled.h1`
    text-align: center;
    color: #f8f8f8;
    width: 90%;

    @media (min-width: 767px) {
        font-size: 3rem;
    }
`

const Button = styled.button`
    padding: 10px 25px;
    background-color: #e3b04b;
    color: #2b2b28;
    font-size: 1.5rem;
    border: 1px solid #2b2b28;
    border-radius: 10px;

    &:hover {
        background-color: #f1d6ab;
        color: #2b2b28;
    }
`

const Span = styled.span`
    color: #e3b04b;
`

export default function Heading() {

    return (
        <Head>
            <Title><Span>Discover</Span> More With Tipsy</Title>

            <Link to="/Discover">
                <Button>Get Tipsy</Button>
            </Link>
        </Head>
    )
}