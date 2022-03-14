import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Users from './Users';

export const GetUserId = (name) => {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/signin')
    .then(response => {
      setUsers(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  const userId = name.replace('/users/', '');
  const user = users.find(user => user._id === userId);

  if(user){
    return user
  }else{
    return 'user is not existed.'
  }
};

const GetUserChat = () => {

  const location = useLocation();
  const user = GetUserId(location.pathname);
  if(!user){
    return "Not found user."
  }

  return (
    <div>
      <Users user={user}/>
    </div>
  )
};

export default GetUserChat;
