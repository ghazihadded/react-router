import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UseList'
import '../App.css'

function NavBar({match}){
    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light ">
           <div className='nav' >
               <h2> User List</h2>
               
               </div>
               <Link to='/user'><button>users</button></Link>
            
            </div>
    )
}


export default NavBar