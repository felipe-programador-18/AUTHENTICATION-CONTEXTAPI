import React, {useContext}  from 'react'
import Time from './Time'
import { AuthContext } from './auth'



//created comment to turn on with comments and time and auth // 
const Comment = ({comment}) => {
  const auth = useContext(AuthContext)
    return(<div>
     {comment.content} por: {comment.users.name} em <Time TIMESTAMP={comment.CreateAT}/>
    </div>)
}

export default Comment