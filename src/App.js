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
            reminder: true
        },
        {
            text: 'Shadow Realm Luigi',
            id:2,
            day: 'March 11th 2022',
            reminder: true
        },
        {
            text: 'Relax',
            id:3,
            day: 'March 21st 2022',
            reminder: false
        },
    ]
  )

  // Add a task
  const addTask = function(){
    return
  }

  // Delete a task
  const deleteTask = function (id){
    setTasks(tasks.filter((task)=>task.id !== id)) // This never actually deletes a task, it only filters out the tasks with the id we've passed...
  }

  // Toggle reminder for task
  const remindTask = function (id){
    setTasks(
      tasks.map(
        (task) => task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  // The SP Application
  return (
    // Functions should always return one element
    // With many others nested inside
    <div className="Container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} remindTask={remindTask} /> : 'No tasks to show! Add some tasks!'}
    </div>
  );
}

export default App;
