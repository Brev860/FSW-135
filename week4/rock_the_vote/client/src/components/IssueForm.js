import React, {useState} from 'react'

initState = {
    title:'',
    issue:'',
}

const IssueForm = () =>{

const [input, setInput] = useState(initState)

const submitEvent = (e)=>{
  e.preventDefault()
}

const {title, issue} = input

    return(
        <div>
            <form onSubmit={submitEvent}>
                <input 
                type='text'
                name='title'
                placeholder='title'
                onChange={(e) => setInput(e.target.value)}
                value={title}
                
                />

                <label>Issue:</label>
                <textarea 
                  id="issue" 
                  name="issue" 
                  rows="6" 
                  cols="60"
                  placeholder='Enter Issue'
                  value={issue}
                  />
                  

                <button>Submit</button>

            </form>
        </div>
    )

}

export default IssueForm