import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {setUserId, setUserName, setUserEmail, setUserToken} = useContext(UserContext);

    function logar(){
        const request = axios.post(
            'https://projeto14-bookstore-back.herokuapp.com/',
            {
                email,
                password,
            }
          );
          request.then((response) => {
            console.log(response.data);
            setUserId(response.data._id);
            setUserName(response.data.name);
            setUserEmail(response.data.email);
            setUserToken(response.data.token)
            navigate("/catalogo");

          });
          request.catch((problem) => {
            console.log(problem.response.data);
            alert(problem.response.data)
          });
    }

    return(
        <LoginPageContainer>
            <Header>Book📚Store</Header>
            <Instrução>Preencha seus dados para login:</Instrução>
            <Input type='email' placeholder="E-mail" onChange={(event)=>setEmail(event.target.value)}/>
            <Input type='password' placeholder="Senha" onChange={(event)=>setPassword(event.target.value)}/>
            <Button onClick={()=>logar()}>Entrar</Button>
            <Footer to='/cadastro'>
                <p>Ainda não possui conta?</p>
                <p>Cadastre-se na Book📚Store!</p>
            </Footer>
        </LoginPageContainer>

    );
}
const LoginPageContainer = styled.div`
background-color: #E2C9AD;
min-height: 100vh;
padding-top: 113.33px;
padding-bottom: 113.33px;
display: flex;
flex-direction: column;
align-items: center;
`;
const Header = styled.div`
width: 100vw;
height: 113.33px;
background-color: #825139;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Cinzel Decorative';
font-weight: 133.33px;
font-size: 50px;
color: black;
position: fixed;
left: 0;
top: 0;
`;
const Footer = styled(Link)`
width: 100vw;
height: 113.33px;
background-color: #383F31;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Merriweather Sans';
font-weight: 133.33px;
font-size: 20px;
color: white;
position: fixed;
right: 0;
bottom: 0;
`;
const Instrução = styled.div`
margin-top: 63.33px;
font-family: 'Merriweather Sans';
font-weight: 133.33px;
font-size: 23.33px;
margin-bottom: 75px;
`;
const Input = styled.input`
width: 300px;
height: 58.33px;
padding-left: 16.67px;
font-family: 'Inter';
font-weight: 133.33px;
font-size: 33.33px;
margin-bottom: 21.67px;
::placeholder{
    color: #788875;
}
`;
const Button = styled.button`
width: 300px;
height: 66.67px;
background-color: #788875;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Merriweather';
font-weight: 233.33px;
font-size: 33.33px;
margin-bottom: 21.67px;
`;