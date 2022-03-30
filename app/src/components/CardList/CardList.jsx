import React from 'react';
import { Card } from '../Card/Card';
import * as Styled from './styles';

export const CardList = (props) => {
    let data = props.data;

    return (
        <Styled.Container >
            {data?
                data.map((card, index) => {
                    let description = `${card.attributes.canonicalTitle} finished at ${card.attributes.endDate}`;
                    return(
                        <li id={index}>
                            <Card 
                                image={card.attributes.posterImage.small} 
                                flipped={props.flipped}
                                title={card.attributes.canonicalTitle}
                                description={description}
                                numb={card.number}
                                id={index}
                            />
                        </li>
                    )
                
                })
            : <span>Carregando cartas.....</span>
            }
        </Styled.Container>
    )
}