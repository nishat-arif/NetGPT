import { useNavigate } from "react-router-dom";
import { logo , defaultUserImage} from "../utils/constants";
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from 'react-redux';

const Header = () =>{

    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const handleSignOut=() =>{

        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
           navigate("/error")
        });

    }
    return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between">
        <img src={logo}
        alt="logo" className="w-44"/>
       { user && <div className="flex m-4">
            <img src={user.photoURL ? user.photoURL : defaultUserImage}
            alt="userImage"  className="w-12 h-12"/>
            <button className="mx-2 p-2 text-white font-bold cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>)
}

export default Header;