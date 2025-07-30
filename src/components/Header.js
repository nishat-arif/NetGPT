import { useNavigate } from "react-router-dom";
import { logo , defaultUserImage} from "../utils/constants";
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();   
    const user = useSelector(store => store.user)

      useEffect(()=>{
        //instead of calling dispatch action (from redux) everytime while doing some user authentication , adding/updating/removing user
        // we can use "OnAuthStateChanged" api given by firebase , it acts like a event listener and whenver state changes it is called
        //automatically  , so we can avoid writing dispatch function everywhere and we can handle all things from single place

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //sign in/sign up
                const {uid , email, displayName, photoURL}= user;
                // add user to store 
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL:photoURL
                }));
                navigate("/browse")
                

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
            })
        
        //it is called when component unmounts , auth should be unsubscribed when component leaves.
        return ()=>unsubscribe()

        },[])


    const handleSignOut=() =>{

        signOut(auth).then(() => {

        }).catch((error) => {
           navigate("/error")
        });

    }
    return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between">
        <img src={logo}
        alt="logo" className="w-44"/>
       { user && <div className="flex m-4">
            <img src={user.photoURL}
            alt="userImage"  className="w-12 h-12"/>
            <button className="mx-2 p-2 text-white font-bold cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>)
}

export default Header;