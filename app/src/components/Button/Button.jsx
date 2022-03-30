import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';


export const Button = ({children, onClick, disabled}) => {

    return (
        <Styled.Container disabled={disabled} onClick={onClick}>{children}</Styled.Container>
    )
}

Button.propTypes = {
    children: P.node.isRequired,
  };

  
  //prevent jest error
export default Button;