import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import CatalagoPage from './components/ProdutosPage/CatalagoPage.js';
import SucessoPage from './components/SucessoPage/SucessoPage';
import UserContext from './contexts/UserContext';
import './css/reset.css';
import './css/style.css';

export default function App() {
    const [userName, setUserName ] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [userToken, setUserToken ] = useState('');

    return(
        <UserContext.Provider value={{userName, setUserName, userEmail, setUserEmail, userId, setUserId, userToken, setUserToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/cadastro' element={<SignupPage/>}/>
                    <Route path='/catalogo' element={<CatalagoPage/>}/>
                    <Route path='/sucesso' element={<SucessoPage/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    ); 
  }