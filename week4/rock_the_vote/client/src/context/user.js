import React, {useState} from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = ` ${token}`
  return config
})

const UserProvider = (props) =>{
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    issues: [] 
  }

  const [userState, setUserState] = useState(initState)

   const registerUser = (credential) =>{
     axios.post('/register', credential)
     .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token

        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
   }

   const userLogin = (credential) =>{
       axios.post('/login', credential)
       .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        getIssues()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
   }
   const userLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issue: []
    })
  } 

  const getIssues = () => {
    userAxios.get("/post")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const  postIssue = (newIssue) =>{
    userAxios.post("/post", newIssue
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
     ) }

    return(
        <UserContext.Provider
          value={{
              ...userState,
              registerUser,
              userLogin,
              userLogout,
              getIssues,
              postIssue

            }}>
          {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider