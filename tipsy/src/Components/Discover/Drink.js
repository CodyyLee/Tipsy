import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Title = styled.h1`
    text-align: center;
`

const Container = styled.div`
    width: 95%;
    padding: 2.5%;
`

const Image = styled.img`
    max-width: 100%;
`

const SubTitle = styled.h2`
    text-align: center;
`

const Ingredients = styled.ul`
    list-decoration: none;
    width: 50%;
    margin: auto;
`

const Instructions = styled.p`
    text-align: center;
    width: 90%;
    padding: 2.5%;
    margin: auto;
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
            <Title>{props.match.params.name}</Title>

            <Container>
                {console.log(drink)}
                <Image src={drink.strDrinkThumb}/>

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
            </Container>
        </>
    )
}