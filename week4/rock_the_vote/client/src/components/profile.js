import React from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import Issues from './Issues'


const Profile = () =>{

    return(

        <div>
            <h1>Welcome User</h1>

            <h2>Enter New Issue</h2>

            <IssueForm/>

        </div>
        
        
    )
}

export default Profile