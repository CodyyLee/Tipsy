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
`

const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #2b2b28;
    text-align: center;
`

const Select = styled.select`
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #f1d6ab;
`

const Button = styled.button`
    background-color: #e3b04b;
    padding: 10px 25px;
    font-size: 1rem;
    margin: 20px auto;
    border-radius: 5px;
    font-weight: bold;
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
            console.log(res);
            setOptions(res.data.drinks);
        }).catch((err) => {
            console.log(err);
        })
    }, [drinks])

    return (
        <>
            <Container>
                <Title>Select Your Ingredient</Title>
                <Select onChange={changeHandler}>
                    {ingredient.map((item, index) => {
                        return <option key={index}>{item.strIngredient1}</option>
                    })}
                </Select>

                {options.map((drink, index) => {
                    return <Option src={drink.strDrinkThumb} name={drink.strDrink} key={index}/>
                })}
            </Container>
        </>
    )
}