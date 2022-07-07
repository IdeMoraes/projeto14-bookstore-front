import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    function logar(){
        const request = axios.post(
            'http://localhost:5000/login',
            {
                email,
                senha,
            }
          );
          request.then((response) => {
            console.log(response.data);
            //Criar parte de receber dados e salvar no Context
            navigate("/");
          });
          request.catch((problem) => {
            console.log(problem.response.data);
          });
    }

    return(
        <LoginPageContainer>
            <Header>Book📚Store</Header>
            <Instrução>Preencha seus dados para login:</Instrução>
            <Input type='email' placeholder="E-mail" onChange={(event)=>setEmail(event.target.value)}/>
            <Input type='password' placeholder="Senha" onChange={(event)=>setSenha(event.target.value)}/>
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
padding-top: 340px;
padding-bottom: 340px;
display: flex;
flex-direction: column;
align-items: center;
`;
const Header = styled.div`
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
const Footer = styled(Link)`
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
const Instrução = styled.div`
margin-top: 190px;
font-family: 'Merriweather Sans';
font-weight: 400px;
font-size: 70px;
margin-bottom: 225px;
`;
const Input = styled.input`
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
const Button = styled.button`
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