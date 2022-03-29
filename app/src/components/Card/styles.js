import styled, {css} from 'styled-components';
import img from './texture.jpg'


const cardFlip = {
    normal: () => css`
      transform:rotateY(0deg);
      transition:ease-out 400ms ;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;

    `,
    flipped: () => css`
      background: url(${img});
      background-size: 245% ;
      transform:rotateY(180deg);
      transition: ease-out 400ms ;
    `,
  };


export const Container = styled.div`
    ${({flipped, image}) => css`
        display:flex;
        flex-direction:column;
        align-items: center;
        border:1px solid gray;
        border-radius:10px;
        height:250px;
        width:160px;
        ${cardFlip[flipped]};

        .card_info {
            display:flex;
            flex-direction:column;
            align-items: center;
            justify-content: center;
            text-align: center ;

            > span {
                margin-top:2px ;
                font-weight:bold ;
            }
        
            .image_container {  
                height: 140px;
                margin-top: 10px;
                width: 110px;
                background-size:cover;
                background-image:url(${image});
            }
        }

        
    `}
   
`