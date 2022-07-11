import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function CartPage(){
/*     const objetoQueVemDoBack = [
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
    ]; */
    const navigate = useNavigate()
    const [chosenBooks,setChosenBooks]=useState([]);

    const { userToken } = useContext(UserContext);
    const config = {
        "headers": {
            "Authorization": `Bearer ${userToken}`
        }
    }
    useEffect(() => {
		const requisicao = axios.get("https://projeto14-bookstore-back.herokuapp.com/carrinho", config);
		requisicao.then(resposta => {
            setChosenBooks(resposta.data);
        });
	}, []);

    function confirmarCarrinho(){
        navigate("/pagamento");
    }

    return(
        <CartPageContainer>
            <Header>Book📚Store</Header>
            <Instrução>Confira os livros em seu carrinho:</Instrução>
            {chosenBooks.map(livro=> <MostrarLivro imagem={livro.imagem} titulo={livro.titulo} preco={livro.preco} quantidadeEmEstoque={livro.quantidadeEmEstoque}/>)}
            <Soma>
                Valor total: {
                chosenBooks.reduce((acumulador, valorAtual)=>{
                    return acumulador + valorAtual.preco;
                }, 0)
                }
            </Soma>
            <Button onClick={()=>confirmarCarrinho()}>Ao pagamento</Button>
            <Footer to='/catalogo'> 
            📚 Volte ao catálogo:
            </Footer>
        </CartPageContainer>
    );
}

function MostrarLivro(props){
    function deletarDoCarrinho(){
        alert("Funcionalidade ainda não implementada");
        document.location.reload(true);
    }
    return(
        <Livro>
            <Capa src={props.imagem}/>
            <Detalhes>
                <Titulo>
                    <InformaPreco>R${props.preco}</InformaPreco>
                    {props.titulo}
                    <ion-icon name="trash" onClick={()=>deletarDoCarrinho()}></ion-icon>
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
padding-top: 113.33px;
padding-bottom: 113.33px;
display: flex;
flex-direction: column;
align-items: center;
`;
const Soma = styled.div`
font-family: "Merriweather";
font-size: 23.33px;
font-weight: 133.33;
text-align: center;
color:black;
margin-bottom: 21.67px;
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
const Livro = styled.div`
display: flex;
margin-bottom: 21.67px;
`;
const Capa = styled.img`
width:83.33px;
height:138.33px;
`;
const Detalhes = styled.div`
width: 271.67px;
height: 138.33px;
display: flex;
flex-direction: column;
`;
const Titulo = styled.div`
width: 271.67px;
height: 68.33px;
background-color: #A67853;
position: relative;
padding-right: 50px;
padding-left: 83.33px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
font-family: "Merriweather Sans";
font-weight: 133.33px;
font-size: 16.67px;
text-align: center;
ion-icon{
    color: white;
    width: 36.67px;
    height: 43px;
    position: absolute;
    right: 11.67px;
    top: 12.67px
}
`;
const InformaPreco = styled.p`
font-family: "Merriweather Sans";
font-weight: 133.33px;
font-size: 16.67px;
text-align: center;
position: absolute;
left: 11.67px;
`;
const Quantidade = styled.div`
width: 271.17px;
height: 70px;
background-color: #383F31;
padding-left: 11.67px;
padding-right: 11.67px;
ion-icon{
    width: 43.33px;
    height: 43.33px;
    color: white;
}
display: flex;
justify-content: space-between;
align-items: center;
font-family: "Merriweather";
font-size: 23.33px;
font-weight: 133.33;
text-align: center;
position: relative;
color:white
`;
const InformaEstoque = styled.p`
font-family: Merriweather;
font-size: 13.33px;
font-weight: 133.33;
text-align: center;
position: absolute;
bottom: 8.33px;
right: 82.67px;
color: white;
`;