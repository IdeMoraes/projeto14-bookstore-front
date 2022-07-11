import axios from 'axios'
import UserContext from '../../contexts/UserContext'
import { useContext,useEffect } from 'react'
import {ButtonSection} from './../../Css-Component/css-components.js'
function enviarParaCarrinho(id_prod,userId, userToken){
   
    const config = {
        headers:{
            Authorization:`Bearer ${userToken}`
        }
    }
    const body = {
        id_prod,
        id_user:userId
    }
    const promise = axios.post("http://localhost:5000/carrinho",body,config)
}

export default function ProdutosButtons(id_produto){
    const {userToken,userId} = useContext(UserContext)
    
    return(
        <>
            <ButtonSection>
                <button className="comprar" onClick={()=>{enviarParaCarrinho(id_produto,userId, userToken)}}> Comprar</button>
                <button> Saiba mais</button>
            </ButtonSection>
        </>
    )
}