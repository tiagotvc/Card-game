import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading/Heading';

export const Card = ({flipped, image, title, description, numb}) => {

    return (
        <Styled.Container flipped={flipped? "flipped" : "normal"} image={image}>
            {!flipped &&
                <div className="card_info">
                    <span>{numb}</span>
                    <Heading
                        size={'small'}
                        color={'blue'}
                    >
                        {title}
                    </Heading>
                    <div className='image_container'/>
                    <Heading
                        size={'small'}
                        color={'orange'}
                    >
                        {description}
                    </Heading>
                    
                    
                </div> 
            }
        </Styled.Container>
    )
}

Card.propTypes = {
    flipped: P.oneOf(['normal', 'flipped']).isRequired,
  };

