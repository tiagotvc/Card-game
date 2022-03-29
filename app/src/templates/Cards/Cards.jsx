import React , {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Heading } from '../../components/Heading/Heading';
import { CardList } from '../../components/CardList/CardList';
import * as Styled from './styles';
import { Button } from '../../components/Button/Button';

export const Cards = () => {
    const data = useSelector(state => state.serviceName);
    const { cards } = useSelector(state => state.serviceCards);

    console.log(cards)

    const [isFlipped, setIsFlipped] = useState(false); 
    const cardsData = cards.data;
    const [cardsArray, setcardsArray] = useState(
        [
            cards.data[Math.floor(Math.random() * cardsData.length)],
            cards.data[Math.floor(Math.random() * cardsData.length)],
            cards.data[Math.floor(Math.random() * cardsData.length)],
            cards.data[Math.floor(Math.random() * cardsData.length)],
            cards.data[Math.floor(Math.random() * cardsData.length)]
        ]
    );

    const handlerCardPush = () => {
        let add = cards.data[Math.floor(Math.random() * cardsData.length)];
        setcardsArray(oldArray => [...oldArray,add] );
    }

    function handlerShuffling() {
        setIsFlipped(true);
        for (var i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
        }
        
        setTimeout(() => {
            setIsFlipped(false);
        }, 600)
        
    }

    return (
        <Styled.Container>
            <Styled.Header>
                <Heading size="big" 
                    color="black"
                    as='h1'
                    uppercase={false}
                >
                    {data.data.name}
                </Heading> 
        </Styled.Header>
        <Styled.Body>
            <CardList data={cardsArray} flipped={isFlipped}/>
        </Styled.Body>
        <Styled.footer>
            <Button disabled={cardsArray.length > 7? true : false} onClick={() => handlerCardPush()}>Puxar Carta</Button>
            <Button onClick={() => handlerShuffling()}>Embaralhar</Button>
        </Styled.footer>
        </Styled.Container>
        
       
    )
}