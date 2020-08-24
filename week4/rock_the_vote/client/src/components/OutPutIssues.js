import React from 'react'
import Issues from './Issues'

const IssueOutPut = (props) => {
  const { issue } = props
  return (
    <div className="issues-listed">
      { issue.map(todo => <Issues {...issue} key={issue._id}/>) }
    </div>
  )
}

export default IssueOutPut