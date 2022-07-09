import axios from 'axios'
import UserContext from '../../contexts/UserContext'
import { useContext,useEffect } from 'react'
import {ButtonSection} from './../../Css-Component/css-components.js'
function enviarParaCarrinho(id_prod, id ,token){
    const config = {
        headers:{
            Authorization:token
        }
    }
    const body = {
        id_prod,id
    }
    const promise = axios.post("http://localhost:5000/carrinho",body,config)
}

export default function ProdutosButtons(id){
    const {userToken,userId} = useContext(UserContext)
    
    return(
        <>
            <ButtonSection>
                <button className="comprar" onClick={()=>{enviarParaCarrinho(id, userId,userToken)}}> Comprar</button>
                <button> Saiba mais</button>
            </ButtonSection>
        </>
    )
}