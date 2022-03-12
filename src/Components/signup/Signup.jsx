import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import '../styles/account.css';

const Signup = () => {

  const [ isFirstName, setIsFirstName ] = useState('');
  const [ isLastName, setIsLastName ] = useState('');
  const [ isEmail, setIsEmail ] = useState('');
  const [ isPassword, setIsPassword ] = useState('');
  const [ isImage, setIsImage ] = useState(null);

  const updateFName = (e) => {
    setIsFirstName(e.target.value)
  };

  const updateLName = (e) => {
    setIsLastName(e.target.value)
  };

  const updateEmail = (e) => {
    setIsEmail(e.target.value)
  };

  const updatePassword = (e) => {
    setIsPassword(e.target.value)
  };

  const submitSignup = (e) => {
    e.preventDefault();

    const registered = {
      firstName: isFirstName,
      lastName: isLastName,
      email: isEmail,
      password: isPassword,
      image: isImage,
    }

    axios.post('http://localhost:4000/signup', registered)
      .then(response => console.log(response.data));

    setIsFirstName('');
    setIsLastName('');
    setIsEmail('');
    setIsPassword('');
    setIsImage('');
  }

  return (
    <div className='body'>
      <div className="wrapper">
        <section className="form signup">
          <header>Realtime Chat App</header>
          <form onSubmit={submitSignup}>
            <div className="error-text">
            </div>
            <div className="name-details">
              <div className="field input">
                <label htmlFor="">First Name</label>
                <input
                  type="text" 
                  name='fname' 
                  placeholder="First Name" 
                  required 
                  value={isFirstName}
                  onChange={(e) => updateFName(e)}/>
              </div>
              <div className="field input">
                <label htmlFor="">Last Name</label>
                <input
                  type="text" 
                  name="lname" 
                  placeholder="Last Name" 
                  required 
                  value={isLastName}
                  onChange={(e) => updateLName(e)}/>
              </div>
            </div>
            <div>
              <div className="field input">
                <label htmlFor="">Email Address</label>
                <input
                  type="text" 
                  name="email" 
                  placeholder="Enter your email" 
                  required 
                  value={isEmail}
                  onChange={(e) => updateEmail(e)}/>
              </div>
              <div className="field input">
                <label htmlFor="">Password</label>
                <input
                  type="password" 
                  name="password" 
                  placeholder="Enter your password" 
                  required 
                  value={isPassword}
                  onChange={(e) => updatePassword(e)}/>
                <i className="fas fa-eye"></i>
              </div>
              <div className="field image">
                <label htmlFor="">Select Image</label>
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setIsImage(base64)}
                  />
              </div>
              <div className="field button">
                <input type="submit" value="Continue to Chat"/>
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