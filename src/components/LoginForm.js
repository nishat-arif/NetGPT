import { useState } from "react"

const LoginForm =()=>{

    const [isSignInForm , setIsSignInForm] = useState(true)

    const handleToggleForm =(event)=>{
        setIsSignInForm(!isSignInForm)
        event.preventDefault();

    }

    return (
    <div className="absolute w-3/12 mx-auto right-0 left-0  my-44  ">
        <form className=" p-12  bg-black text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ?'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"></input>}
            <input type="text" placeholder="Email address" className="p-2 my-2 w-full bg-gray-700"></input>
            <input type="text" placeholder="Password" className="p-2 my-2 w-full bg-gray-700"></input>
            <button className="p-2 my-4 bg-red-800 w-full rounded-lg cursor-pointer" onClick={handleToggleForm}>{isSignInForm ?'Sign In' : 'Sign Up'}</button>
            <p className="py-4" >{isSignInForm ?'New to Netflix? Sign Up Now.' : 'Already Registered? Sign In'}</p>
        </form>
    </div>)
}

export default LoginForm