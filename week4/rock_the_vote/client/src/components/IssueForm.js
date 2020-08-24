import React, { useState } from 'react'

const formInputs = {
  title: "",
  issue: ""
}

const  IssueForm = (props) => {
  const [input, setInput] = useState(formInputs)
  const { addIssue } = props

  function handleChange(e){
    const {name, value} = e.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(input)
    setInput(formInputs)
  }

  const { title, issue } = formInputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <input 
        type="text" 
        name="description" 
        value={issue} 
        onChange={handleChange} 
        placeholder="Description"/>
     
      <button>Add Issue</button>
    </form>
  )
}

export default IssueForm