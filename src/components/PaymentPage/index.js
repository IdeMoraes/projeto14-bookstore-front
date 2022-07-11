import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function PaymentPage(){
    const [numeroDoCartao, setNumeroDoCartao] = useState('');
    const [nomeNoCartao, setNomeNoCartao] = useState('');
    const [vencimentoDoCartao, setVencimentoDoCartao] = useState('');
    const [codigoDoCartao, setCodigoDoCartao] = useState('');
    const navigate = useNavigate();

    return(
        <PaymentPageContainer>
            <Header>Book📚Store</Header>
            <Instrução>Preencha com os dados do seu cartão de crédito:</Instrução>
            <Input type='text' placeholder="Número do cartão" onChange={(event)=>setNumeroDoCartao(event.target.value)}/>
            <Input type='text' placeholder="Nome do titular" onChange={(event)=>setNomeNoCartao(event.target.value)}/>
            <Input type='text' placeholder="Data de vencimento" onChange={(event)=>setVencimentoDoCartao(event.target.value)}/>
            <Input type='password' placeholder="Código de segurança" onChange={(event)=>setCodigoDoCartao(event.target.value)}/>
            <Button onClick={()=>alert("Funcionalidade ainda não implementada")}>Efetuar a compra</Button>
            <Footer to='/cadastro'>
                <p>Ainda não possui conta?</p>
                <p>Cadastre-se na Book📚Store!</p>
            </Footer>
        </PaymentPageContainer>

    );
}
const PaymentPageContainer = styled.div`
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
font-size: 80px;
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