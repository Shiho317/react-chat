import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/users.css';

const Users = ({user}) => {

  const [ isSearch, setIsSearch ] = useState(false);

  const searchBarToggle = () => {
    setIsSearch(prev => !prev)
  };

  console.log(user)
  console.log(user.image)

  const auth = getAuth();

  const userLoggedOut = async() => {
    signOut(auth).then(() => {
      alert('Your account is logged out successfully.')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode){
        alert(errorMessage)
      }
    })
  }

  return (
    <div className='body'>
      <div className="wrapper">
      <section className="users">
        <header>
          <div className="content">
            <img src={user.image} alt=""/>
            <div className="details">
              <span>{user.firstName} {user.lastName}</span>
              <p>Active now</p>
            </div>
          </div>
          <Link to='/' className="logout" onClick={() => userLoggedOut()}>Logout</Link>
        </header>
        <div className="search">
          <span className="text">
            Select an user to start chat
          </span>
          <input className={isSearch ? 'active' : ''} type="text" placeholder="Enter name to search..."/>
          <button className={isSearch ? 'active' : ''} onClick={searchBarToggle}><i className="fas fa-search"></i></button>
        </div>
        <div className="users-list">
        <Link to={`/chat/${user._id}`}>
          <div className="content">
            <img src="#" alt=""/>
            <div className="details">
              <span>Coding Nepal</span>
              <p>Active now</p>
            </div>
          </div>
          <div className="status-dot">
            <i className="fas fa-circle"></i>
          </div>
        </Link>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Users