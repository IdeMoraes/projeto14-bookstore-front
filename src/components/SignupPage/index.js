import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignupPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setpasswordConfirmation] = useState('');
    const navigate = useNavigate();

    function cadastrar(){
        if(password===passwordConfirmation){
            const request = axios.post(
                'https://projeto14-bookstore-back.herokuapp.com/cadastro',
                {
                    name,
                    email,
                    password,
                }
            );
            request.then((response) => {
                console.log(response.data);
                navigate("/");
            });
            request.catch((problem) => {
                console.log(problem.response.data);
            });
        }
        else alert('Campo "Senha" e "Repita a senha" devem ser iguais');

    }

    return(
        <SignupPageContainer>
            <Header>Book📚Store</Header>
            <Instrução>Preencha seus dados de cadastro:</Instrução>
            <Input type='text' placeholder="Nome" onChange={(event)=>setName(event.target.value)}/>
            <Input type='email' placeholder="E-mail" onChange={(event)=>setEmail(event.target.value)}/>
            <Input type='password' placeholder="Senha" onChange={(event)=>setPassword(event.target.value)}/>
            <Input type='password' placeholder="Repita a senha" onChange={(event)=>setpasswordConfirmation(event.target.value)}/>
            <Button onClick={()=>cadastrar()}>Cadastre-se</Button>
            <Footer to='/'>
                <p>Já possui conta?</p>
                <p>Entre na Book📚Store!</p>
            </Footer>
        </SignupPageContainer>

    );
}
const SignupPageContainer = styled.div`
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
margin-bottom: 45px;
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
const Button = styled.div`
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