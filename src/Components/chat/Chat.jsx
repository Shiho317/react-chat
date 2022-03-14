import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/chat.css';
import { db } from '../../App.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const Chat = () => {

  const location = useLocation();
  const userId = location.pathname.replace('/chat/', '');

  let messageArr = [];

  const getData = async() => {
    const messageDoc = await getDocs(collection(db, userId));
    messageDoc.forEach(message => {
      messageArr = [...messages, message.data().message]
    })
  };

  useEffect(() => {
    getData();
  },[])

  const messageRef = useRef(null);
  const [ message, setMessage ] = useState('');
  const [ messages, setMessages ] = useState(messageArr);
  
  const change = (e) => {
    setMessage(e.target.value);
  }

  const addToFirestore = async() => {

    const docRef = await addDoc(collection(db, userId), {
            message: message,
            timeStamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);

    setMessages([...messages, messageRef.current.value])

    messageRef.current.value = '';

  };

  console.log(messageArr);
  console.log(messages)

  return (
    <div className='body'>
      <div className="wrapper">
        <section className="chat-area">
        <header>
          <Link to={`/users/${userId}`} className="back-icon">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <img src='#' alt=""/>
          <div className="details">
            <span>Coding Nepal</span>
            <p>Active now</p>
          </div>
        </header>
        <div className="chat-box">
          <div className="chat outgoing">
            <div className="details">
            {messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
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
          <input type="text" placeholder="Type a message here..." ref={messageRef} onChange={(e) => change(e)}/>
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