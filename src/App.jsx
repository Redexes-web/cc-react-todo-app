import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fechting :', error);
      });
  }, []);

  return (
    <div>
      <h1>Ma TODO-list</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
