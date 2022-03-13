import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import '../styles/chat.css';
import { db } from '../../App.js';
import { addDoc, collection } from 'firebase/firestore';

const Chat = () => {

  const [ message, setMessage ] = useState('')

  const change = (e) => {
    setMessage(e.target.value);
  }

  // const { addToFirestore } = useContext(AppContext);

  const addToFirestore = async() => {
    const docRef = await addDoc(collection(db, 'chat'), {
            message: message,
            timeStamp: new Date(),
    });
          console.log("Document written with ID: ", docRef.id);
  }


  return (
    <div className='body'>
      <div className="wrapper">
        <section className="chat-area">
        <header>
          <Link to='/users' className="back-icon">
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
          <input type="text" placeholder="Type a message here..." onChange={(e) => change(e)}/>
          <button onClick={addToFirestore}>
            <i className="fab fa-telegram-plane"></i>
          </button>
        </form>
        </section>
      </div>
    </div>
  )
}

export default Chat