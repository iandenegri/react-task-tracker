import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task(props) {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick={function(){props.remindTask(props.task.id)}}>
            <h3>
                {props.task.text} 
                <FaTimes 
                    style={{color: 'red', cursor:'pointer'}} 
                    onClick={function(){props.deleteTask(props.task.id)}} 
                />
            </h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task
