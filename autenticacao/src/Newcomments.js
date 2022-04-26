import React, {useState, useContext} from 'react'
import firebase from './firebase'
import { AuthContext } from './auth'
import { UsedatabasePush } from './database'

const NewComments = () => {
    //pull date to adding newcomments
    const [, save] = UsedatabasePush()
    const [comment, setcomments] = useState('')
    const auth = useContext(AuthContext)
    if(auth.users === null){
        return null
    }
    console.log(auth.users)
    const {displayNome} = auth.users
    const [altenativedisplay] = auth.users.email.split('@')

    const CreateComment = () => {
        
    }

}
