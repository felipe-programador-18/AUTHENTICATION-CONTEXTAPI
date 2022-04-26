import React from 'react'
import {AuthProvider} from './auth'
import Comments from './Comments'
import './App.css';


function App() {
  return (
    <AuthProvider >
    <div className="App">
     <Comments/>
    </div>

    </AuthProvider>
  );
}

export default App;
