import React, { useContext } from 'react'
import IssueForm from './IssueForm'
import IssueOutput from './OutPutIssues'
import { UserContext } from '../context/user'

const Profile = () =>{
  const { 
    user: { 
      username 
    }, 
    addIssue, 
    issues 
  } = useContext(UserContext)

  return (
    <div className="profile">
      
      <h3>Submit and Issue</h3>
           <IssueForm addIssue={addIssue}/>
                 <h3>{username}'s Posted Issues</h3>
           <IssueOutput issues={issues}/>
    </div>
  )
}

export default Profile