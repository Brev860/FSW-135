import React, {useState} from 'react'
import axios from 'axios'


export const UserContext = React.createContext()

const UserProvider = (props) =>{

const initState = {
    user:{},
    token:'',
    issue:[]
}
const [userState, setUserState] = useState(initState)

const register = (credentials) =>{
   axios.post('/auth/register', credentials)
   .then(res =>{
       console.log(res)
       .catch(err =>{
           console.log(err)
       })
   })
}
const login = (credentials) =>{
    axios.post('/auth/login', credentials)
    .then(res =>{
        console.log(res)
        .catch(err =>{
            console.log(err)
        })
    })
 }

return(
    <UserContext.Provider
    value={{
        ...userState,
        register,
        login
    }}
    >
        {props.children}
    </UserContext.Provider>
)


}

export default UserProvider