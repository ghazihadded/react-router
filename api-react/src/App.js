import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import UserList from './components/UseList';
import NavBar from './components/NavBar';

import './App.css';




function App() {

  
 

  return (
    <div className="App">
     <BrowserRouter>
    
     <Route  path='/' component={NavBar} /> 
        <Switch>
        
      <Route  path='/user' component={UserList} />
      </Switch>
   
      </BrowserRouter>
    </div>
  );
}

export default App;
