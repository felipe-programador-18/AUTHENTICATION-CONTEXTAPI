import  {useState, useContext} from 'react'
import firebase from './firebase'
import { AuthContext } from './auth'
import { UsedatabasePush } from './database'

const NewComments = () => {
    //pull date to adding newcomments
    const [, save] = UsedatabasePush('comments')
    const [comment, setcomments] = useState('')
    const auth = useContext(AuthContext)
    if(auth.users === null){
        return null
    }
    console.log(auth.users)
    const {displayName} = auth.users
    const [altenativedisplay] = auth.users.email.split('@')

    const CreateComment = () => {
        if(comment !== ''){
            save({
                content: comment,
                createAT: firebase.database.ServerValue.TIMESTAMP,
                users:{
                  id: auth.users.uid,
                  name: displayName || altenativedisplay
                }
            })
            setcomments('')
          }
      }
  return (<div>
          <textarea value={comment}   onChange={ evt => setcomments(evt.target.value)}/> <br/>
          <button onClick={CreateComment} ></button>

         </div>)
}

export default NewComments