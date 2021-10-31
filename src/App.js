// React
import React from 'react';
import { useState } from 'react'

// Local
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // State Stuff
  const [tasks, setTasks] = useState(
    [
        {
            text: 'oo',
            id: 1
        },
        {
            text: 'aa',
            id:2
        },
        {
            text: 'ee',
            id:3
        },
    ]
  )

  // The SP Application
  return (
    // Functions should always return one element
    // With many others nested inside
    <div className="Container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
