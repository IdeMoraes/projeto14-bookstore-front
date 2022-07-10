import { NewHeader,ContainerTotal,ConteinerMobile,Instrução,NewFooter,ConteinerConteudo,ConteinerProdutos,CardLivro,ImgSection,ImgStyled,ButtonSection} from "../../Css-Component/css-components";
import styled from "styled-components";
import Checkbox from "../../assets/Checkbox";

export default function SucessoPage(){

    return(
        <ContainerTotal>
            <ConteinerMobile>
                <NewHeader><h1>Book📚Store</h1></NewHeader>
                <ConteinerConteudo>
                    <Instrução>
                        <p>Parabéns, {"Victor"} !</p>
                        <p>Seu Pedido foi:</p>
                    </Instrução>
                    <CheckoutSection>
                        <CategoriaStyled>Produtos: </CategoriaStyled>
                        <ProdutoStyled>
                            <ImgMini>
                            <img src="https://m.media-amazon.com/images/I/51XQMRLuGYL.jpg" />
                            </ImgMini> 
                            <ProdutoDados>
                                <h4>1984</h4>
                                <p>George Orwell</p>
                            </ProdutoDados>
                            <ProdutoDados>
                                <p>por</p>
                                <h4>R$29,99</h4>
                            </ProdutoDados>
                           
                        </ProdutoStyled>
                    </CheckoutSection>
                </ConteinerConteudo>
               
            </ConteinerMobile>
        </ContainerTotal>
    )
}

const CheckoutSection = styled.section`
    margin: 20px 0;
`

const CategoriaStyled = styled.h5`
    font-size:20px;
`

const ProdutoStyled = styled.article`
    padding: 10px 0;
    display: flex;
    justify-content:flex-start;
    align-items:center;
`

const ImgMini = styled.article`
    padding:5px;
    width:60px;
    border-radius:5px;
    border:1px solid rgba(50,50,50,0.6);
    box-shadow: 0 2px 10px 1px rgba(0,0,0,0.15);
    display: flex;
    justify-content:center;
    align-items:center;
    img{
    width:50px;
    border-radius:5px;
    }
`

const ProdutoDados = styled.article`
    margin-left:30px;
    height:40px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    p{
        font-size:12px
    }
`