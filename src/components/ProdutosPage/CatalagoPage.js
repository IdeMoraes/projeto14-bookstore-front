import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { NewHeader,ContainerTotal,ConteinerMobile,Instrução,NewFooter,ConteinerConteudo,ConteinerProdutos,CardLivro,ImgSection,ImgStyled,ButtonSection} from "../../Css-Component/css-components";
import ProdutosButtons from "./ProdutosButtons";


export default function CatalagoPage(){
   
    
    const config = {
        token:`Bearer ${"123abc"}`
    }

    // useEffect(()=>{
    //     const promise = axios.get("http://localhost:5000/produtos",config);
    //     promise.then((res)=>{
    //         setProdutos([...res.data]);
    //         setLoadin(false);
    //     }).catch((error)=>{ console.log(error)}) },[])

    
    function RenderProduto({image,name,autor, valor,id}){
        return(
            <CardLivro>
                            <ImgSection>
                                <ImgStyled src={image}alt={`capa do livro ${name}`}></ImgStyled>
                            </ImgSection>
                            <section className="info_livros">
                                <article>
                                    <h3>{name}</h3>
                                    <p>{autor}</p>
                                </article>

                                <article className="valor">
                                    <p className="small">por </p> <h3><strong>R${valor}</strong></h3>
                                </article>
                            </section>
                            <ProdutosButtons id={id}/>
                        </CardLivro>

        )
    }
    

    function renderizarPage(){
        
        return(
            <>
                <NewHeader><h1>Book📚Store</h1></NewHeader>
                <Instrução>Catálogo de Livros:</Instrução>
                {/* {produtos.map((produto)=>{<RenderProduto 
                image={produto.image} 
                name={produto.name}
                />})} */}
            </>
        )
    }
    return(
        <ContainerTotal>
            <ConteinerMobile>
                <NewHeader><h1>Book📚Store</h1></NewHeader>
                <ConteinerConteudo>
                    <Instrução>
                        <p>Olá novamente, {"Victor"} !</p>
                        <p>Catálogo de Livros:</p>
                    </Instrução>
                    <ConteinerProdutos>
                       <RenderProduto    image={"https://m.media-amazon.com/images/I/51XQMRLuGYL.jpg"} name={ "1984"} autor={"George Orwell"} valor={29.99} id={"001"}/>
                       <RenderProduto    image={"https://m.media-amazon.com/images/I/51XQMRLuGYL.jpg"} name={ "1984"} autor={"George Orwell"} valor={29.99} id={"001"}/>
                       <RenderProduto    image={"https://m.media-amazon.com/images/I/51XQMRLuGYL.jpg"} name={ "1984"} autor={"George Orwell"} valor={29.99} id={"001"}/>
                       <RenderProduto    image={"https://m.media-amazon.com/images/I/51XQMRLuGYL.jpg"} name={ "1984"} autor={"George Orwell"} valor={29.99} id={"001"}/>
                     </ConteinerProdutos>
                </ConteinerConteudo>
                <NewFooter to='/carrinho'>
                <p>📚Abra seu carrinho:</p>
                <p>Cadastre-se na Book📚Store!</p>
            </NewFooter>
            </ConteinerMobile>
            
        </ContainerTotal>

    )
} 
