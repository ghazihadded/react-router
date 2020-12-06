import React from 'react'
import '../App.css'

function UserData({ match, data }) {

    const find = data.find(el => el.id == match.params.id)
    let user;
    if (find) {
        user = <React.Fragment>

            <h2>{find.name}</h2>
             <p>{find.username}</p>
              <p>{find.email} </p>
              <hr />
              <p>{find.address.city} </p>
        </React.Fragment>

    }

    return (
        <div className='text-userdata'>
            {user}
        </div>
    )
}


export default UserData