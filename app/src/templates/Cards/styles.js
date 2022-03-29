import styled from 'styled-components';
import { Container as ButtonComponent } from '../../components/Button/styles';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center ;
`;

export const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end ;
    padding-right:20px;
`;

export const Body = styled.div`
    display:flex;
    margin-top:20px;
    align-items:center;
    justify-content:center;
`;

export const footer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:30px;

    > ${ButtonComponent} {
        margin-left: 30px ;
    }
`;