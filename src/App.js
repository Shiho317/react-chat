import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Signin from './Components/signin/Signin';
import Signup from './Components/signup/Signup';
import Chat from './Components/chat/Chat';
import Users from './Components/users/Users';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
