import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { NewHeader,ContainerTotal,ConteinerMobile,Instrução,NewFooter,ConteinerConteudo,ConteinerProdutos,CardLivro,ImgSection,ImgStyled,ButtonSection} from "../../Css-Component/css-components";
import ProdutosButtons from "./ProdutosButtons";


export default function CatalagoPage(){
    const {userToken} = useContext(UserContext)
    const [produtos,setProdutos]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const config = {
        token:`Bearer ${userToken}`
    }

    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/produtos",config);
        promise.then((res)=>{
            setProdutos([...res.data]);
            setLoading(false);
        }).catch((error)=>{ console.log(error)}) },[])

    
    function RenderProduto({imagem,titulo,autor, preco,id_produto}){
        return(
            <CardLivro>
                            <ImgSection>
                                <ImgStyled src={imagem}alt={`capa do livro ${titulo}`}></ImgStyled>
                            </ImgSection>
                            <section className="info_livros">
                                <article>
                                    <h3>{titulo}</h3>
                                    <p>{autor}</p>
                                </article>

                                <article className="valor">
                                    <p className="small">por </p> <h3><strong>R${preco}</strong></h3>
                                </article>
                            </section>
                            <ProdutosButtons id_produto={id_produto}/>
                        </CardLivro>

        )
    }
    

    function renderizarProdutos(){
        if(loading){
            return
        }else{
            return(
                <>
                {produtos.map((produto)=>{
                        <RenderProduto  
                        titulo={ produto.titulo} 
                        autor={produto.autor} 
                        preco={produto.preco} 
                        id_produto={produto._id}
                        imagem={produto.imagem}
                        />
                      })}
                </>
            )
        }
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
                      {renderizarProdutos()}
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
