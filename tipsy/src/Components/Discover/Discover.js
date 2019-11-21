import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import Option from "./Option";

const Container = styled.div`
    width: 90%;
    padding: 5%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    flex-direction: column;
    background-color: rgba(0,0,0,0.75);

    @media(min-width: 767px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #f8f8f8;
    text-align: center;

    @media(min-width: 767px) {
        font-size: 2.5rem;
    }

    @media(min-width: 1199px) {
        font-size: 3.5rem;
    }
`

const Select = styled.select`
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #f1d6ab;
    
    @media(min-width: 767px) {
        font-size: 1.5rem;
    }
`

const Span = styled.span`
    color: #e3b04b;
`

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default function Discover() {

    const [ingredient, setIngredient] = useState([]);
    const [drinks, setDrinks] = useState("Light rum");
    const [options, setOptions] = useState([]);

    const changeHandler = (e) => {
        setDrinks(e.target.value);
    }

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then((res) => {
            setIngredient(res.data.drinks);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinks}`).then((res) => {
            setOptions(res.data.drinks);
        }).catch((err) => {
            console.log(err);
        })
    }, [drinks])

    return (
        <>
            <Container>
                <Section>
                    <Title><Span>Select</Span> Your Ingredient</Title>
                    <Select onChange={changeHandler}>
                        {ingredient.map((item, index) => {
                            return <option key={index}>{item.strIngredient1}</option>
                        })}
                    </Select>
                </Section>
                

                {options.map((drink, index) => {
                    return <Option src={drink.strDrinkThumb} name={drink.strDrink} key={index}/>
                })}
            </Container>
        </>
    )
}