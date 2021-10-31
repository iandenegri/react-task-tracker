import React from 'react'

import Task from './Task'

const Tasks = (props) => {
    return (
        <div>
            {props.tasks.map(
                function(task){
                    return (<Task key={task.id} task={task} deleteTask={props.deleteTask} remindTask={props.remindTask} />)
                }
            )}
        </div>
    )
}

export default Tasks
