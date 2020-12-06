import React from 'react'
import {Link} from 'react-router-dom'

const Users = ({user}) => {
    // if(!users) return null;
    const {email, name, username} = user;
    return (
        <div>
            <h1>
                {username} ({name})
            </h1>
            <p>
                <b>Email : </b> {email}
            </p>
        </div>
    )
}
export default Users