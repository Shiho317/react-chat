import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/account.css';

const Signin = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [ users, setUsers ] = useState([]);
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassword ] = useState('')

  
    const onChangeEmail = (e) => {
      setUserEmail(e.target.value);
    }

    const onChangePassword = (e) => {
      setUserPassword(e.target.value);
    }

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
            setTimeout(() => {
              window.location.href = '/users'
            }, 1000);
          }else{
            alert("Your password was wrong.")
            emailRef('')
            passwordRef('')
          }
        }else{
          alert("Your email account doesn't have any account.")
          emailRef('');
          passwordRef('');
        }
        return user
      })

      
    };


  return (
    <div className='body'>
      <div className="wrapper">
      <section className="form login">
        <header>Realtime Chat App</header>
        <form onSubmit={submitSignin}>
          <div className="error-text">
            This is an error message.
          </div>
          <div>
            <div className="field input">
              <label htmlFor="">Email Address</label>
              <input
                type="text" 
                placeholder="Enter your email" 
                onChange={(e) => onChangeEmail(e)}
                ref={emailRef}/>
            </div>
            <div className="field input">
              <label htmlFor="">Password</label>
              <input
                type="password" 
                placeholder="Enter new password" 
                onChange={(e) => onChangePassword(e)}
                ref={passwordRef}/>
              <i className="fas fa-eye"></i>
            </div>
            <div className="field button">
              <input type="submit" value="Continue to Chat"/>
            </div>
          </div>
        </form>
        <div className="link">
          Not yet signed up?
          <Link to='/signup'>Signup now</Link>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Signin