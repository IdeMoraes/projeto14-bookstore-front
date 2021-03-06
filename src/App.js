import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import CatalagoPage from './components/ProdutosPage/CatalagoPage.js';
import SucessoPage from './components/SucessoPage/SucessoPage';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage';

import './css/reset.css';
import './css/style.css';

export default function App() {
    const [userName, setUserName ] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [userToken, setUserToken ] = useState('');

    return(
        <UserContext.Provider value={{userId, setUserId, userName, setUserName, userEmail, setUserEmail, userToken, setUserToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/cadastro' element={<SignupPage/>}/>

                    <Route path='/catalogo' element={<CatalagoPage/>}/>
                    <Route path='/sucesso' element={<SucessoPage/>}/>

                    <Route path='/carrinho' element={<CartPage/>}/>
                    <Route path='/pagamento' element={<PaymentPage/>}/>

                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    ); 
  }