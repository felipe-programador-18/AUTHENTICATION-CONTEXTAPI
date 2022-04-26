import React, {useEffect, useState} from 'react'
import firebase from './firebase'

//here i'm create context to manage all layer of code
export const AuthContext = React.createContext()

const UseGetUser = () => {
   const [users, setusers] = useState(null)

   useEffect(() => {
     firebase.auth().onAuthStateChanged(currentlyuser => {
         if(currentlyuser){
             setusers(currentlyuser)
         }else{
             setusers(null)
         }
     })
   }, [])
   return users
}