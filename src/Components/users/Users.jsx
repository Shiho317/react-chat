import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/users.css';

const Users = () => {

  const [ isSearch, setIsSearch ] = useState(false);

  const searchBarToggle = () => {
    setIsSearch(prev => !prev)
  };

  return (
    <div className='body'>
      <div class="wrapper">
      <section class="users">
        <header>
          <div class="content">
            <img src="#" alt=""/>
            <div class="details">
              <span>Coding Nepal</span>
              <p>Active now</p>
            </div>
          </div>
          <Link to='/' class="logout">Logout</Link>
        </header>
        <div class="search">
          <span class="text">
            Select an user to start chat
          </span>
          <input className={isSearch ? 'active' : ''} type="text" placeholder="Enter name to search..."/>
          <button className={isSearch ? 'active' : ''} onClick={searchBarToggle}><i class="fas fa-search"></i></button>
        </div>
        <div class="users-list">
        <Link to='/'>
          <div class="content">
            <img src="#" alt=""/>
            <div class="details">
              <span>Coding Nepal</span>
              <p>Active now</p>
            </div>
          </div>
          <div class="status-dot">
            <i class="fas fa-circle"></i>
          </div>
        </Link>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Users