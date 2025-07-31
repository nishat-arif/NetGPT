import { useRef, useState } from "react"
import {validateLoginForm} from "../utils/validate"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import {  defaultUserImage} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { toggleGptSearchPage} from "../utils/gptSearchSlice"

const LoginForm =()=>{

    const [isSignInForm , setIsSignInForm] = useState(true)
    const [errorMessage , setErrorMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const dispatch = useDispatch();
    const gptSearch = useSelector(store=>store.gptSearch)
    

    const handleToggleForm =()=>{
        setIsSignInForm(!isSignInForm)
        email.current.value = null
        password.current.value = null
        setErrorMessage(null)

    }

    const handleBtnClick =()=>{
        const message = validateLoginForm(email.current.value, password.current.value)
        setErrorMessage(message)

        //create new user(sign/signup successfull) create a new user in firebase
        if(message) return; // if there is errormessage return from here and dont proceed further.

        if(!isSignInForm){
            //signup 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                            displayName: name.current.value , 
                            photoURL: defaultUserImage
                            }).then(() => {
                                const {uid , email, displayName, photoURL}= auth.currentUser;
                                // update user from auth to store and navigate user to browse page as well
                                dispatch(addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL : photoURL
                                }));
                                
                                if(gptSearch.showGptSearch)dispatch(toggleGptSearchPage())
                            }).catch((error) => {
                                    const errorCode = error.code;
                                    const errorMessage = error.message;
                            });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    //setErrorMessage(errorCode + errorMessage)


                });

        }
        else{
            //signin
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    //setErrorMessage(errorCode + errorMessage)
                });

        }

    }

    return (
    <div className="absolute w-3/12 mx-auto right-0 left-0  my-44  ">
        <form onSubmit={(e)=>{e.preventDefault()}} className=" p-12  bg-black text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ?'Sign In' : 'Sign Up'}</h1>
            {(errorMessage != null) && <p className="bg-yellow-600 text-black my-2 p-2">{errorMessage}</p>}
            {!isSignInForm && <input ref ={name} type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"></input>}
            <input ref ={email} type="text" placeholder="Email address" className="p-2 my-2 w-full bg-gray-700"></input>
            <input ref={password} type="text" placeholder="Password" className="p-2 my-2 w-full bg-gray-700"></input>
            <button className="p-2 my-4 bg-red-800 w-full rounded-lg cursor-pointer" onClick={handleBtnClick}>{isSignInForm ?'Sign In' : 'Sign Up'}</button>
            <p className="py-4 cursor-pointer" onClick={handleToggleForm} >{isSignInForm ?'New to Netflix? Sign Up Now.' : 'Already Registered? Sign In'}</p>
        </form>
    </div>)
}

export default LoginForm