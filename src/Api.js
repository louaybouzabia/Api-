import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
    const [li, setLi] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setLi(response.data);
        });}, []);
  
    
      return (
        <div>
          <h1>List of Users</h1>
          <ul>
            {li.map(user => (
              <li>{user.name}</li>
            ))}
          </ul>
        </div>
      );
    
  };
export default Api;