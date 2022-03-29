import styled from 'styled-components';

export const Container = styled.ul`
    display:flex;
    list-style: none ;
    align-items:center;
    justify-content:center;
    padding:0;
    
    > li {
        padding: 2px ;
    }

    @media(max-width: 1330px){
        display:grid;
        grid-template-columns:1fr 1fr 1fr 1fr;
    }

    @media(max-width: 720px){
        display:grid;
        grid-template-columns:1fr 1fr;
    }
        
`