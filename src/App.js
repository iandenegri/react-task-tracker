// React
import React from 'react';
import { useState } from 'react'

// Local
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  // State Stuff
  const [tasks, setTasks] = useState(
    [
        {
            text: 'Fight a war with Smurfs',
            id: 1,
            day: 'March 1st 2022',
        },
        {
            text: 'Shadow Realm Luigi',
            id:2,
            day: 'March 11th 2022',
        },
        {
            text: 'Relax',
            id:3,
            day: 'March 21st 2022',
        },
    ]
  )

  // Delete a task
  const deleteTask = function (id){
    setTasks(tasks.filter((task)=>task.id !== id)) // This never actually deletes a task, it only filters out the tasks with the id we've passed...
  }

  // The SP Application
  return (
    // Functions should always return one element
    // With many others nested inside
    <div className="Container">
      <Header />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
