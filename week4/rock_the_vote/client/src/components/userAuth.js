import React, { useState, useContext } from 'react'
import userForm from './singupSigninForm'
import { UserContext } from '../context/user'

const userInfo = { username: "", password: "" }

const Auth = () =>{
  const [entry, setEntry] = useState(userInfo)
  const [toggle, setToggle] = useState(false)

  const { registerUser, userLogin } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setEntry(prevEntry => ({
      ...prevEntry,
      [name]: value
    }))
  }

  function register(e){
    e.preventDefault()
    registerUser(entry)
  }

  function login(e){
    e.preventDefault()
    userLogin(entry)
  }

  return (
    <div className="signin">
      <h1>Political Issues</h1>
      { !toggle ?
        <>
          <userForm 
            handleChange={handleChange}
            handleSubmit={register}
            entry={entry}
            button="Register"
          />
          <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
        </>
      :
        <>
          <userForm 
            handleChange={handleChange}
            handleSubmit={login}
            entry={entry}
            button="Login"
          />
          <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
        </>
      }
    </div>
  )
}
export default Auth