import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body =()=>{

    const dispatch = useDispatch();
  

    useEffect(()=>{
        //instead of calling dispatch action (from redux) everytime while doing some user authentication , adding/updating/removing user
        // we can use "OnAuthStateChanged" api given by firebase , it acts like a event listener and whenver state changes it is called
        //automatically  , so we can avoid writing dispatch function everywhere and we can handle all things from single place

        onAuthStateChanged(auth, (user) => {
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
                

            } else {
                // User is signed out
                dispatch(removeUser());
            }
            })},[])

    

    const appRouter = createBrowserRouter([
        {path:'/',
        element: <Login/>
        },
        {path:'/browse',
        element: <Browse/>
        },

    ])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;
