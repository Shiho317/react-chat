import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import '../styles/users.css';

const Users = () => {

  const [ isSearch, setIsSearch ] = useState(false);

  const searchBarToggle = () => {
    setIsSearch(prev => !prev)
  };

  // const { user } = useContext(AppContext)

  return (
    <div className='body'>
      <div className="wrapper">
      <section className="users">
        <header>
          <div className="content">
            <img src='#' alt=""/>
            <div className="details">
              <span>Coding Nepal</span>
              <p>Active now</p>
            </div>
          </div>
          <Link to='/' className="logout">Logout</Link>
        </header>
        <div className="search">
          <span className="text">
            Select an user to start chat
          </span>
          <input className={isSearch ? 'active' : ''} type="text" placeholder="Enter name to search..."/>
          <button className={isSearch ? 'active' : ''} onClick={searchBarToggle}><i className="fas fa-search"></i></button>
        </div>
        <div className="users-list">
        <Link to='/'>
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