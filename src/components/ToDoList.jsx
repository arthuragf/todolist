import React, { useState } from "react"
const ToDoList = () => {
    const taskList = ['placeholder 1', 'placeholder 2']
    
    return <>
        <h1 className="todo-title">To Do List</h1>
        <div>
            <input type="text" name="add_task" placeholder="Add a task" id="add_task" className="add_task"></input>
            <button>Add Task</button>
        </div>
        <div>
            <ol>
                {
                    taskList.map((task, index) => 
                        <li key={index}>
                            <span className="task-name">{task}</span>
                            <button className="del-btn">Delete Task</button>
                            <button className="up-btn">Move Task Up</button>
                            <button className="down-btn">Move Task Down</button>
                        </li>
                    )
                }
            </ol>
        </div>
    </>
}
export default ToDoList
