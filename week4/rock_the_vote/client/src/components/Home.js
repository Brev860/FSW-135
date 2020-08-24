import React from 'react'
import {Link} from 'react-router-dom'

const Home = ()=>{

    return(
        <div>
            <h2>Welcome to Rock the Vote</h2>
            <p>This is an open forum for users to bring awarness to issues. As well as vote on issues they feel are important. Here everyone has a voice</p>
            <br/>
            <p>If you have an account please login or Register by clicking below.</p>
            <Link to='/Auth/register'>Register</Link>
        </div>
    )
}
export default Home