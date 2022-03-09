import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/chat.css';

const Chat = () => {
  return (
    <div className='body'>
      <div className="wrapper">
        <section className="chat-area">
        <header>
          <Link to='/' className="back-icon">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <img src="#" alt=""/>
          <div className="details">
            <span>Coding Nepal</span>
            <p>Active now</p>
          </div>
        </header>
        <div className="chat-box">
          <div className="chat outgoing">
            <div className="details">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="chat incoming">
            <img src="#" alt=""/>
            <div className="details">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <form action="#" className="typing-area">
          <input type="text" placeholder="Type a message here..."/>
          <button>
            <i className="fab fa-telegram-plane"></i>
          </button>
        </form>
        </section>
      </div>
    </div>
  )
}

export default Chat