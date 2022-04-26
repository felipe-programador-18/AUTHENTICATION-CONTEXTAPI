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

//create access with authentication
const UserCreated = () => {
  const [state, setstate] = useState({
      error:'',
      success: ''
  })

  const CreateUser = (email, password) => {
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(users => {
          if(users){
              setstate({
              ...state ,
              success:'ok'
              })
          }
        })
      .catch(err => {
         setstate({
             ...state,
             error: err.message
         })
      })
  } 
    return [state, CreateUser]
}


//create singIn
const UserSingin = () => {
   const [state, setstate] = useState({
       error :'',
       success:''
   })
   
   const SingInUser = (email, password) => {
       firebase
       .auth()
       .signInWithEmailAndPassword(email, password)
       .catch(err => {
           setstate({
               ...state ,
               error : err.message 
           })
       })
   }
   return [state , SingInUser ]
}


//create singout
//always receive firebase
const singout = () => {
    firebase
    .auth()
    .signOut()
    .then(() => {
        console.log('sing out')
    })
}


//theorical this gonna control all state aplications!!!

export const AuthProvider  = () => {

}