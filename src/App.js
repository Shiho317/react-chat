import React, { createContext, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Signin from './Components/signin/Signin';
import Signup from './Components/signup/Signup';
import Chat from './Components/chat/Chat';
import Users from './Components/users/Users';

export const AppContext = createContext(null);

function App() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [ users, setUsers ] = useState([]);
  const [ user, setUser ] = useState();
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassword ] = useState('')

  const submitSignin = (e) => {
    e.preventDefault();

    axios.get('http://localhost:4000/signin')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {
      console.log(error)
    })

    users.map(user => {
      if(user.email === userEmail){
        if(user.password === userPassword){
          alert("You are successfully logged in.")
          setUser(user);
          // setTimeout(() => {
          //   window.location.href = '/users'
          // }, 1000);
        }else{
          alert("Your password was wrong.")
          passwordRef.current.value = '';
        }
      }else{
        alert("Your email account doesn't have any account.")
        emailRef.current.value = '';
        passwordRef.current.value = '';
      }
      return user
    })
  };

  console.log(user);

  return (
    <div>
      <AppContext.Provider 
        value={{
          emailRef, 
          passwordRef, 
          users, 
          setUsers, 
          userEmail, 
          setUserEmail, 
          userPassword, 
          setUserPassword, 
          submitSignin,
          user
        }}>
        <Router>
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/chat' element={<Chat/>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
