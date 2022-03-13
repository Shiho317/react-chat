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
import AuthRoute from './Components/AuthRoute';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const AppContext = createContext(null);

function App() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [ users, setUsers ] = useState([]);
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassword ] = useState('')
  const [ userId, setUserId ] = useState('');

  // let userUid;

  const submitSignin = async(e) => {

    e.preventDefault();

      const findUser = users.find(user => user.email === userEmail);

      let slug;
      const auth = getAuth();

      if(findUser === undefined){
        alert("Your email account doesn't have any account.")
        emailRef.current.value = '';
        passwordRef.current.value = '';
      }else{
        if(findUser.password === userPassword){
          alert("You are successfully logged in.")
          slug = findUser._id;
          setUserId(slug);
          console.log(slug);

          signInWithEmailAndPassword(auth, userEmail, userPassword)
          .then((userCredential => {
            const user = userCredential.user;
            console.log(user);
          }))

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
  // const auth = getAuth();

  // const addToFirestore = async() => {
  //   console.log(userUid)
  //   console.log(auth)
  //   const docRef = await addDoc(collection(db, 'chat'), {
  //           message: '',
  //           timeStamp: new Date(),
  //   });
  //         console.log("Document written with ID: ", docRef.id);
  // }

  const removeFromFirestore = async() => {

  };

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
          removeFromFirestore,
        }}>
        <Router>
          <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path={"/users/:userId"} element={<AuthRoute><GetUserChat/></AuthRoute>}/>
            <Route path='/chat' element={<AuthRoute><Chat/></AuthRoute>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
