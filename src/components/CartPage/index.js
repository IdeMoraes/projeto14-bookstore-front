import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function CartPage(){
    const objetoQueVemDoBack = [
        {
        _id: "62cb1eb711a3da9d70fb8a15",
        idDoLivro: 1,
        titulo: "Memórias Póstumas de Brás Cubas",
        imagem: "https://www.revistabula.com/wp/wp-content/uploads/2016/10/Memorias-Postumas-300x500.jpeg.webp",
        autor: "Machado de Assis",
        preco: 53.45,
        descricao: "um livro classico!",
        quantidadeEmEstoque: 50
        },
        {
        _id: "62cb1eb711a3da9d70fb8a16",
        idDoLivro: 2,
        titulo: "Macunaima",
        imagem: "https://www.revistabula.com/wp/wp-content/uploads/2016/10/Macunaima-300x467.jpg.webp",
        autor: "autor do livro",
        preco: 55.99,
        descricao: "um livro muito legal!.",
        quantidadeEmEstoque: 40
        },
    ];
    const navigate = useNavigate()
/*     const [chosenBooks,setChosenBooks]=useState([]);

    const { userToken } = useContext(UserContext);
    const config = {
        "headers": {
            "Authorization": `Bearer ${userToken}`
        }
    }
    useEffect(() => {
		const requisicao = axios.get("http://localhost:5000/produtos/carrinho", config);
		requisicao.then(resposta => {
            setChosenBooks(resposta.data);
        });
	}, []); */

    function confirmarCarrinho(){
        navigate("/pagamento");
    }
    return(
        <CartPageContainer>
            <Header>Book📚Store</Header>
            <Instrução>Confira os livros em seu carrinho:</Instrução>
            {objetoQueVemDoBack.map(livro=> <MostrarLivro imagem={livro.imagem} titulo={livro.titulo} preco={livro.preco} quantidadeEmEstoque={livro.quantidadeEmEstoque}/>)}
            <Button onClick={()=>confirmarCarrinho()}>Ao pagamento</Button>
            <Footer to='/'>  {/* Trocar para /catalogo após o pull dessa feature */}
            📚 Volte ao catálogo:
            </Footer>
        </CartPageContainer>
    );
}

function MostrarLivro(props){
    return(
        <Livro>
            <Capa src={props.imagem}/>
            <Detalhes>
                <Titulo>
                    <InformaPreco>R${props.preco}</InformaPreco>
                    {props.titulo}
                    <ion-icon name="trash" onClick={()=>alert("Funcionalidade ainda não implementada")}></ion-icon>
                </Titulo>
                <Quantidade>
                <ion-icon name="remove-circle" onClick={()=>alert("Funcionalidade ainda não implementada")}></ion-icon>
                Comprar 1
                <InformaEstoque>({props.quantidadeEmEstoque} em estoque)</InformaEstoque>
                <ion-icon name="add-circle" onClick={()=>alert("Funcionalidade ainda não implementada")}></ion-icon>
                </Quantidade>
            </Detalhes>
        </Livro>
    );
}

const CartPageContainer = styled.div`
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
const Livro = styled.div`
display: flex;
margin-bottom: 65px;
`;
const Capa = styled.img`
width:250px;
height:415px;
`;
const Detalhes = styled.div`
width: 815px;
height: 415px;
display: flex;
flex-direction: column;
`;
const Titulo = styled.div`
width: 815px;
height: 205px;
background-color: #A67853;
position: relative;
padding-right: 150px;
padding-left: 250px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
font-family: "Merriweather Sans";
font-weight: 400px;
font-size: 50px;
text-align: center;
ion-icon{
    color: white;
    width: 110px;
    height: 129px;
    position: absolute;
    right: 35px;
    top: 38px
}
`;
const InformaPreco = styled.p`
font-family: "Merriweather Sans";
font-weight: 400px;
font-size: 50px;
text-align: center;
position: absolute;
left: 35px;
`;
const Quantidade = styled.div`
width: 815px;
height: 210px;
background-color: #383F31;
padding-left: 35px;
padding-right: 35px;
ion-icon{
    width: 130px;
    height: 130px;
    color: white;
}
display: flex;
justify-content: space-between;
align-items: center;
font-family: "Merriweather";
font-size: 70px;
font-weight: 400;
text-align: center;
position: relative;
color:white
`;
const InformaEstoque = styled.p`
font-family: Merriweather;
font-size: 40px;
font-weight: 400;
text-align: center;
position: absolute;
bottom: 25px;
right: 248px;
color: white;
`;