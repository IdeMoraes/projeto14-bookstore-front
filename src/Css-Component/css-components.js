import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerTotal = styled.div`
background-color: #E2C9AD;
height: 100%;
min-height:100vh;
width:100vw;
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items: center;
`

export const ConteinerMobile = styled.section`
max-width: 600px;
min-width: 300px;
width:90%;
height:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
`

export const LoginPageContainer = styled.div`
background-color: #E2C9AD;
min-height: 100vh;
padding-top: 340px;
padding-bottom: 340px;
display: flex;
flex-direction: column;
align-items: center;
`;
export const SignupPageContainer = styled.div`
background-color: #E2C9AD;
min-height: 100vh;
padding-top: 340px;
padding-bottom: 340px;
display: flex;
flex-direction: column;
align-items: center;
`;
export const Header = styled.div`
width: 100vw;
height: 340px;
background-color: #825139;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Cinzel Decorative';
font-weight: 400px;
font-size: 150px;
color: black;
position: fixed;
left: 0;
top: 0;
`;

export const NewHeader = styled.article`
width: 100vw;
height: 87px;
box-shadow: 0 0 2px 2px rgba(0,0,0,0.3);
display:flex;
justify-content: center;
align-items: center;
position: fixed;
left: 0;
top: 0;
background-color: #815139;
h1{
    font-family: 'Cinzel Decorative';
    font-weight: 400;
    font-size: 50px;
}
`

export const Footer = styled(Link)`
width: 100vw;
height: 340px;
background-color: #383F31;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Merriweather Sans';
font-weight: 400px;
font-size: 60px;
color: white;
position: fixed;
right: 0;
bottom: 0;
`;

export const NewFooter = styled(Link)`
width: 100vw;
height: 87px;
background-color: #383F31;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Merriweather Sans';
font-weight: 400;
font-size: 20px;
color: white;
position: fixed;
right: 0;
bottom: 0;
`;
export const Instrução = styled.div`
margin-top:20px;
font-family: 'Merriweather Sans';
font-weight: 400;
font-size: 21px;
text-align:center;

p:first-of-type{
    margin-bottom: 10px;
}
`;
export const Input = styled.input`
width: 900px;
height: 175px;
padding-left: 50px;
font-family: 'Inter';
font-weight: 400px;
font-size: 100px;
margin-bottom: 65px;
::placeholder{
    color: #788875;
}
`;
export const Button = styled.div`
width: 900px;
height: 200px;
background-color: #788875;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Merriweather';
font-weight: 700px;
font-size: 100px;
margin-bottom: 65px;
`;



export const ConteinerConteudo= styled.section`
    width:100%;
    margin: 90px;
    display: flex;
    flex-direction: column;
    justify-content:center;
`

export const ConteinerProdutos = styled.section`
    margin-top: 20px;
    overflow:scroll;
    justify-items:center;
    
    display:grid;
    grid-template-columns:1fr 1fr;
    column-gap:5px ;
    row-gap: 15px;
`

export const CardLivro = styled.article`
    display: flex;
    width:150px;
    height:300px;
    padding:10px 5px;
    background-color:#e8c8a7;
    border:1px solid rgba(50,50,50,0.8);
    border-radius:5px;
    box-shadow: 0 5px 5px 1px rgba(0,0,0,0.15);
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    
    .info_livros{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        text-align:center;
        margin-top:10px;
    }  
    
    .small{
        font-size:13px;
    }
    strong{
        font-weight:700;
    }
`
export const ButtonSection=styled.section`
    margin-top:10px;
    height:56px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    button{
        width:120px;
        height:26px;
        background-color:#E8C8A7;
        border-radius:5px;
        border: 1px solid #788875;
        font-weight:700;
    }
    .comprar{
        background-color:#788875;
    }
`
export const ImgSection = styled.section`
    width:120px;
    height:135px;
    border:1px solid rgba(50,50,50,0.8);
    border-radius:5px;
    background-color:#edd5bb;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
`
export const ImgStyled = styled.img`
    border-radius:5px;
    width:100px;
    height:120px;
`