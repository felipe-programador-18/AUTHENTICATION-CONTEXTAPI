import React from 'react'
import {AuthProvider} from './auth'
import Comments from './Comments'
import NewComments from './Newcomments'
import './App.css'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'


function App() {
  return (
    <AuthProvider >
    <div className="App">
     <NewComments/> 
     <Comments/>
     <CreateUser/>
     <UserInfo/>
    </div>

    </AuthProvider>
  );
}

export default App;
