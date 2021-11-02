// React
import React from 'react';
import { useState, useEffect } from 'react'

// Local
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {
  // State Stuff
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([])

  // Load data from fake DB

  // Add a task
  const addTask = function(task){
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
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
      <Header setShowForm={() => setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddTask addTask={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} remindTask={remindTask} /> : 'No tasks to show! Add some tasks!'}
    </div>
  );
}

export default App;
