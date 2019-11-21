import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Item = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 5px;
    margin: 20px auto;
    background-color: #e3b04b;

    &:hover {
        transform: scale(1.1);
        transition: .3s;
    }

    a {
        text-decoration: none;
        color: black;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`

const Name = styled.p`
    text-align: center;
    position: relative;
    top: 0;
    margin: 0;
    color: #f8f8f8;
`

export default function Option(props) {

    return (
        <Item>
            <Link to={`/Discover/${props.name}`}>
                <Name>{props.name}</Name>
                <Image src={props.src}/>
            </Link>
        </Item>
    )
}