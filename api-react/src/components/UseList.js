
import  React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Route ,Link} from 'react-router-dom'

import UserData from './UserData'

function UserList({match}){
    const [list,setList]=useState([])
    const [err,setErr]=useState()

    useEffect(() => {

        function listData(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> { setList(res.data);
        console.log(list) 
        })
        .catch(err=>setErr(err))  
        }
    
       listData();
    },[])
  
    console.log(list);
   
   return (
       <>
        <div className='border border-primary '>
            
            {list.map(user=>
                
                  (
                  <Link to={`${match.url}/${user.id}`}> <div className='list-user'>
                     <div className='user-name' key={user.id}>{user.name}</div>
                      
                  </div>
                  </Link> 
            )
            )}
             </div>
           
           <Route  path ={`${match.url}/:id`} render={(props)=><UserData data={list}{...props} />}  />  
           
           <Route exact path ={`${match.url}`} render={()=>(<div className='text-usercard' > <h2>user card</h2></div>)} />
           
           
        </>
    )
}






export default UserList 