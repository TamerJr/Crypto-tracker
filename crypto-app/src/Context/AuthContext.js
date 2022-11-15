import React ,{useContext ,createContext ,useState,useEffect} from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import { auth, db } from '../firebase'
import {doc,setDoc} from "firebase/firestore"

const userContext=createContext()
export const  AuthContextProvider=({children})=>{
  const [user,setUser]=useState({})
  const signUp=(email,password)=>{
    setDoc(doc(db,"user",email),{
      watchList:[],
    });
    return createUserWithEmailAndPassword(auth ,email,password)
  };
  const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unsub=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
  })
  return()=>{
    unsub()
  }
  },[])
  return(
    <userContext.Provider value={{signUp,signIn,logOut,user}}>
      {children}
    </userContext.Provider>
  )
};
export const  AuthUser=()=>{
  return useContext(userContext)
}