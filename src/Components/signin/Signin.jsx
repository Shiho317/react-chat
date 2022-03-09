import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/account.css';

const Signin = () => {
  return (
    <div className='body'>
      <div className="wrapper">
      <section className="form login">
        <header>Realtime Chat App</header>
        <form action="#">
          <div className="error-text">
            This is an error message.
          </div>
          <div>
            <div className="field input">
              <label for="">Email Address</label>
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div className="field input">
              <label for="">Password</label>
              <input type="password" placeholder="Enter new password"/>
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