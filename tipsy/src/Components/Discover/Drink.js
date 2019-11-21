import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Title = styled.h1`
    text-align: center;
    color: #e3b04b;
    width: 100%;

    @media (min-width: 767px) {
        font-size: 3rem;
    }
`

const Container = styled.div`
    width: 95%;
    min-height: 80vh;
    padding: 2.5%;
    background-color: rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(min-width: 1199px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const Cont = styled.div`
    width: 100%
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(min-width: 1199px) {
        width: 50%;
    }
`

const Image = styled.img`
    max-width: 100%;
    border-radius: 10px;

    @media (min-width: 767px) {
        width: 60%;
    }

    @media (min-width: 1199px) {
        width: 30%;
    }
`

const SubTitle = styled.h2`
    text-align: center;
    color: #e3b04b;

    @media (min-width: 767px) {
        font-size: 2rem;
    }
`

const Ingredients = styled.ul`
    list-style-type: none;
    width: 50%;
    margin: auto;
    color: #f8f8f8;

    @media (min-width: 767px) {
        width: 50%;
        font-size: 1.5rem;
    }
`

const Instructions = styled.p`
    text-align: center;
    width: 90%;
    padding: 2.5%;
    margin: auto;
    color: #f8f8f8;

    @media (min-width: 767px) {
        width: 60%;
        font-size: 1.5rem;
    }
`

export default function Drink(props) {

    const [drink, setDrink] = useState({});
    const [items, setItems] = useState([]);
    const [amount, setAmount] = useState([]);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props.match.params.name}`).then((res) => {
            setDrink(res.data.drinks[0]);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        setItems(Object.keys(drink).filter(key => key.startsWith("strIngredient")).map((value => drink[value])))

        setAmount(Object.keys(drink).filter(key => key.startsWith("strMeasure")).map((value => drink[value])))
    }, [drink])

    return(
        <>
            <Container>
                <Title>{props.match.params.name}</Title>
                <Image src={drink.strDrinkThumb}/>

                <Cont>
                    <SubTitle>Ingredients</SubTitle>
                    <Ingredients>
                        {items.map((item, index) => {
                            if(item === null) {
                                return
                            }
                            else{
                                return <li key={index}><b>{amount[index]}</b> {item}</li>
                            }
                        })}
                    </Ingredients>

                    <SubTitle>Preperation</SubTitle>
                    <Instructions>{drink.strInstructions}</Instructions>
                </Cont>
            </Container>
        </>
    )
}