import React from 'react'
import {withRouter} from 'react-router-dom'
import WithRouterSample from './WithRouterSample'

const data ={
    velopert: {
        name : "kst",
        description: "react devloper",
    },
    gildong :{
        name : "hong",
        description: "react devloper 2",
    }
}

const Profile = ({match})=>{
    const {username} = match.params
    const profile = data[username]
    if(!profile){
        return <div>Not Existed User!</div>
    }
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    )
}

export default withRouter(Profile)