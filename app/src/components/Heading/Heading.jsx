import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';


export const Heading = ({
    size = 'big',
    uppercase = false,
    children, 
    as = 'h1',
    color = 'black'
}) => {
    return (
        <Styled.Text
            size={size}
            uppercase={uppercase}
            as={as}
            color={color
        }>
            {children}
        </Styled.Text>
    );
};

Heading.propTypes = {
    children: P.node.isRequired,
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    size: P.oneOf(['small', 'medium', 'big', 'huge']).isRequired,
    uppercase: P.bool.isRequired,
    color: P.node.isRequired
  };

  //prevent jest error
export default Heading;