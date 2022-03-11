import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/account.css';
import axios from 'axios';
import { AppContext } from '../../App';

const Signin = () => {

  const { 
    emailRef, 
    passwordRef, 
    setUserEmail, 
    setUserPassword, 
    submitSignin,
    setUsers, 
  } = useContext(AppContext);
  
    const onChangeEmail = (e) => {
      setUserEmail(e.target.value);
    }

    const onChangePassword = (e) => {
      setUserPassword(e.target.value);
    }

  useEffect(() => {
    axios.get('http://localhost:4000/signin')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[setUsers])

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