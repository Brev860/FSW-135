import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import UserContext from './context/user'
import Nav from './components/Nav'
import Home from './components/Home'
import Auth from './components/userAuth'
import Profile from './components/userProfile'
import './App.css';

function App() {
  const { token, userLogout } = useContext(UserContext)
  return (
    <div className="App">
      <Nav logout={userLogout}/>
      <Switch>
        <Route 
          exact path="/profile" 
          render={()=> token ? <Redirect to="/profile"/> : <Auth />}
        />
        <Route 
          path="/profile"
          render={() => <Profile />}
        />
        <Route 
        exact path='/auth/register'
        render={() => <Auth/>}
        />
        <Route
        exact path='/Home'
        render={() => <Home/>}
        />
      </Switch>
    </div>
  );
}

export default App;
