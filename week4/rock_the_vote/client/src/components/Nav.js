import React from 'react'
import {Link} from 'react-router-dom'


const Nav = (props) =>{
    const {logout} = props

    return(
        <div className='nav'>
              <Link to='/profile'>Profile</Link>
              <Link to='/Home'>Home</Link>
              <button onClick={logout}>LogOut</button>
        </div>
    )

}

export default Nav