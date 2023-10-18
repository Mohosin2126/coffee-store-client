import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./Firebase.config";

export const Authcontext=createContext(null)
const AuthProvider = ({children}) => {

const [user,setUser]=useState(null)
const [loading, setLoading] = useState(true);

const createUser=(email,password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth, email , password)
}
const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}


 const AuthInfo={

user,
createUser,
loading,
signInUser

 }




    return (
        <Authcontext.Provider value={AuthInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;