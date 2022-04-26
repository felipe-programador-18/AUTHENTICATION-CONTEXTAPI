import React from 'react'
import {AuthProvider} from './auth'
import Comments from './Comments'

import NewComments from './Newcomments'
import './App.css'
import CreateUser from './CreateUser'


function App() {
  return (
    <AuthProvider >
    <div className="App">
     <NewComments/> 
     <Comments/>
     <CreateUser/>
     
    </div>

    </AuthProvider>
  );
}

export default App;
