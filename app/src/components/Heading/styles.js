import styled, { css } from 'styled-components';

const textSize = {
    small: () => css`
      font-size: 10px ;
    `,
    medium: () => css`
      font-size: 15px ;
    `,
    big: () => css`
      font-size: 22px ;
    `,
    huge: () => css`
      font-size: 35px ;
    `,
  };
  
  const textCase = (uppercase) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `;

export const Text = styled.h1`
    ${({size, uppercase, color }) => css`
    color: ${color};
    ${textSize[size]};  ${textSize[size]};
    ${textCase(uppercase)};
    `}
`;