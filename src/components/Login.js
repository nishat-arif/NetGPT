import Header from './Header'
import LoginForm from './LoginForm';
import React from 'react';

const Login =()=>{

    return (
        <div>
            <Header/>
            <div className="absolute"> 
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/US-en-20250721-TRIFECTA-perspective_9c9e6f85-98cd-4301-a831-9396a0a3a1df_large.jpg"
                alt="background"/>    
            </div>
            <LoginForm/> 
        </div>
     )
}

export default Login;