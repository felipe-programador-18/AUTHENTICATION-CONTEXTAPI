import React, {useState,useContext} from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
  const auth = useContext(AuthContext)

  const[form, setform] =useState({email:'', password:''})
  //theoritecal i need use spring operator to caught inside out all form
  const onChange = campo => evt => {
     setform({
         ...form,
         [campo]: evt.target.value
     })
  }
  if(auth.users !== null){
      return null
  }

  return ( <>
    <h3>Por favor crie uma conta!</h3>
      { auth.CreateUser.CreateUser.error !== '' && 
      <p> {auth.CreateUser.CreateUser.error} </p> 
      }
    <input type='text' placeholder='E-mail' value={form.email} onChange={onChange('email')} />
    
    <input type='password' placeholder='password' value={form.password} onChange={onChange('password')} />

    <button onClick={ () => {auth.CreateUser.CreateUser(form.email, form.password)}}>Criar Conta!</button> 
  
  </>
  )
}


export default CreateUser