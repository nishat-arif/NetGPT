import Header from './Header'
import LoginForm from './LoginForm';
import React from 'react';
import { backgroundImage } from '../utils/constants';

const Login =()=>{

    return (
        <div>
            <Header/>
            <div className="absolute"> 
                <img src={backgroundImage}
                alt="background-image" />    
            </div>
            <LoginForm/> 
        </div>
     )
}

export default Login;