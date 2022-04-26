import {useState, useEffect} from 'react'
import firebase from './firebase'


//remember this is connect all date to adding new date in database

export const UsedatabasePush = endpoints => {
 const [status,setstatus] = useState('')
  const save = data => {
     const ref = firebase.database().ref(endpoints)
     ref.push(data,err => {
         if(err){
             setstatus('Error in application')
         }else{
             setstatus('Success')
         }
     })
   }
    return [status, save]
}

export const Usedatabase = endpoints =>{
  const [data, setdata] = useState({})
  useEffect(() => {
    const ref = firebase.database().ref(endpoints)
    ref.on('value', snapshoot => {
        setdata(snapshoot.val())
    })
   return () => {
       ref.off()
   }
  }, [endpoints])
   return data
}