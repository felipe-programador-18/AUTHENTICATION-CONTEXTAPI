import React from 'react'
import  {Usedatabase} from './database'
import Comment from './Comment'


const Comments = () => {
   const data = Usedatabase('comments')
   if(!data){
       return <p>Nenhum comentario adicionado no momento</p>
   }
   // now need create code to caught all ids
   const ids = Object.keys(data)
   if(ids.length === 0 ){
       return <p> carregando....</p>
   }
   return ids.map(id => {
       return <Comment key={id} comment={data[id]}  />
   })
}


export default Comments