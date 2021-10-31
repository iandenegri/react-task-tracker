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
            text: 'Fight a war with Smurfs',
            id: 1
        },
        {
            text: 'Shadow Realm Luigi',
            id:2
        },
        {
            text: 'Relax',
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
