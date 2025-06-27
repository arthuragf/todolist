import React, { useState } from "react"
const ToDoList = () => {
    const [taskList, setTaskList] = useState(['placeholder 1', 'placeholder 2'])
    const [newTask, setNewTask] = useState("")

    const handleNewTaskChange = (event) => setNewTask(event.target.value)

    const addTask = () => {
        setTaskList(prevTaskList => [...prevTaskList, newTask])
        setNewTask("")
    }

    const delTask = (index) => setTaskList(taskList.filter((_, idx) => idx !== index))

    const moveTaskUp = (index) => {
        console.log(index)
        if (index <= 0 || index >= taskList.length) return
        const updatedTasks = [...taskList]
        const temp = updatedTasks[index - 1]
        updatedTasks[index - 1] = updatedTasks[index]
        updatedTasks[index] = temp
        console.log(updatedTasks)
        setTaskList(updatedTasks)
    }

    return <>
        <h1 className="todo-title">To Do List</h1>
        <div>
            <input type="text" name="add_task" placeholder="Add a task" 
                id="add_task" className="add_task" onChange={handleNewTaskChange} 
                value={newTask}
            />
            <button className="add-btn" onClick={addTask}>Add Task</button>
        </div>
        <div>
            <ol>
                {
                    taskList.map((task, index) => 
                        <li key={index}>
                            <span className="task-name">{task}</span>
                            <button className="del-btn" onClick={() => delTask(index)}>Delete Task</button>
                            <button className="up-btn" onClick={() => moveTaskUp(index)}>Move Task Up</button>
                            <button className="down-btn">Move Task Down</button>
                        </li>
                    )
                }
            </ol>
        </div>
    </>
}
export default ToDoList
