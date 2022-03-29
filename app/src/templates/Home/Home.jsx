import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCardsData } from '../../feature/cardsService/cardsService';
import { changeName } from '../../feature/nameService/nameService';

import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styles';

import { Heading } from '../../components/Heading/Heading';
import { Button } from '../../components/Button/Button';

export const Home = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

   const handlerCardsRedux = async () => {
        await dispatch(getCardsData());

        return ( 
            navigate("/cards")
        )
    }

    return ( 
        <Styled.Container>
            <Heading size="huge" 
                    color="orange"
                    as='h1'
                    uppercase={false}
            >
                Desafio Wa Project
            </Heading>
            <label>Digite seu Nome:</label>
            <input type="text" id="name" 
                onBlur={(e) => dispatch(changeName({name:e.target.value}))}
            />
            
            <Button 
                onClick={() => handlerCardsRedux()}
            >
                Ver Cartas
            </Button>
        </Styled.Container>

    )
}