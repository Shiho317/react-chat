import React, { createContext, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Signin from './Components/signin/Signin';
import Signup from './Components/signup/Signup';
import Chat from './Components/chat/Chat';
import GetUserChat from './Components/users/[id]';

export const AppContext = createContext(null);

function App() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [ users, setUsers ] = useState([]);
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassword ] = useState('')
  const [ userId, setUserId ] = useState('');
  

  const submitSignin = (e) => {

    e.preventDefault();

      const findUser = users.find(user => user.email === userEmail);

      let slug;

      if(findUser === 'undefined'){
        alert("Your email account doesn't have any account.")
        emailRef.current.value = '';
        passwordRef.current.value = '';
      }else{
        if(findUser.password === userPassword){
          alert("You are successfully logged in.")
          slug = findUser._id;
          setUserId(slug);
          console.log(slug)
          setTimeout(() => {
            window.location.href = `/users/${slug}`
          }, 1000);
        }else{
          alert("Your password was wrong.")
          passwordRef.current.value = '';
        }
      };
      console.log(slug)
  }

  console.log(userId)

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
        }}>
        <Router>
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path={"/users/:userId"} element={<GetUserChat/>}/>
            <Route path='/chat' element={<Chat/>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
