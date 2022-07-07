import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import './css/reset.css';
import './css/style.css';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/cadastro' element={<SignupPage/>}/>
            </Routes>
        </BrowserRouter>
    ); 
  }