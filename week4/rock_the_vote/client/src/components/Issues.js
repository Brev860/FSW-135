import React from 'react'

const Issues = (props) => {
  const { title, issue} = props
  return (
    <div className="todo">
      <h1>{ title }</h1>
      <h3>{ issue }</h3>
    </div>
  )
}

export default Issues