import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/account.css';

const Signup = () => {
  return (
    <div className='.body'>
      <div className="wrapper">
        <section className="form signup">
          <header>Realtime Chat App</header>
          <form action="#">
            <div className="error-text">
            </div>
            <div className="name-details">
              <div className="field input">
                <label for="">First Name</label>
                <input type="text" name='fname' placeholder="First Name" required />
              </div>
              <div className="field input">
                <label for="">Last Name</label>
                <input type="text" name="lname" placeholder="Last Name" required />
              </div>
            </div>
            <div>
              <div className="field input">
                <label for="">Email Address</label>
                <input type="text" name="email" placeholder="Enter your email" required />
              </div>
              <div className="field input">
                <label for="">Password</label>
                <input type="password" name="password" placeholder="Enter your password" required />
                <i className="fas fa-eye"></i>
              </div>
              <div className="field image">
                <label for="">Select Image</label>
                <input type="file" name="image" required />
              </div>
              <div className="field button">
                <input type="submit" value="Continue to Chat" />
              </div>
            </div>
          </form>
          <div className="link">
            Already signed up?
            <Link to='/'>Login now</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Signup