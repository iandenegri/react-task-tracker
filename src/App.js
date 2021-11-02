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
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromDB = await fetchTasks();
      setTasks(tasksFromDB);
    }

    getTasks();

  }, [])

  // Load tasks from fake db
  const fetchTasks = async() => {
    const resp = await fetch('http://localhost:5000/tasks')
    const data = await resp.json();

    return(data);
  }

  const fetchTask = async(id) => {
    const resp = await fetch(
      `http://localhost:5000/tasks/${id}`)
    const data = await resp.json();

    return(data);
  }

  // Add a task
  const addTask = async function(task){
    const resp = await fetch(
      'http://localhost:5000/tasks', 
      {
        method:'POST', 
        headers: {'Content-type': 'application/json'}, 
        body: JSON.stringify(task)
      }
    )

    const data = await resp.json()

    setTasks([...tasks, data]);
  }

  // Delete a task
  const deleteTask = async function (id){
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    
    setTasks(tasks.filter((task)=>task.id !== id)) // This never actually deletes a task, it only filters out the tasks with the id we've passed...
  }

  // Toggle reminder for task
  const remindTask = async function (id){
    const taskToRemind = await fetchTask(id);
    const updateTask = { ...taskToRemind, reminder: !taskToRemind.reminder}

    const resp = await fetch(
      `http://localhost:5000/tasks/${id}`, 
      {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(updateTask)
      }
    )

    const data = await resp.json()

    setTasks(
      tasks.map(
        (task) => task.id === id ? {...task, reminder: data.reminder} : task
      )
    )
  }

  // The SP Application
  return (
    // Functions should always return one element
    // With many others nested inside
    <div className="container">
      <Header setShowForm={() => setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddTask addTask={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} remindTask={remindTask} /> : 'No tasks to show! Add some tasks!'}
    </div>
  );
}

export default App;
