import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app)
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signin = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    const loginGithub = ()=>{
       return signInWithPopup(auth, githubProvider)
    }

    const LogOut = ()=>{
        signOut(auth)
        setUser(null)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            console.log('this is loged user from authState', user) ;
            setUser(user)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }

    },[])

    const authInfo = {
        user ,
        loading,
        createUser,
        signin,
        LogOut,
        loginGithub
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;