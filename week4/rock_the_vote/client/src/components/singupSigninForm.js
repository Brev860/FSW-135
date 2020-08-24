import React from 'react'

const userForm = (props) =>{
  const {
    handleChange, 
    handleSubmit, 
    button, 
    entry: {
      username, 
      password
    } 
  } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>
      <input 
        type="text" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
      <button>{ button }</button>
    </form>
  )
}

export default userForm