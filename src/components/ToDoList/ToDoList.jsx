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
        if (index <= 0 || index >= taskList.length) return
        const updatedTasks = [...taskList]
        const temp = updatedTasks[index - 1]
        updatedTasks[index - 1] = updatedTasks[index]
        updatedTasks[index] = temp
        setTaskList(updatedTasks)
    }

    const moveTaskDown = (index) => {
        if (index >= taskList.length - 1) return
        const updatedTasks = [...taskList]
        const temp = updatedTasks[index + 1]
        updatedTasks[index + 1] = updatedTasks[index]
        updatedTasks[index] = temp
        setTaskList(updatedTasks)
    }

    return <>
        <div className="app-container">
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
                            <span className="task-name">
                                {task}
                            </span>
                            <button className="up-btn" onClick={() => moveTaskUp(index)} title="Move Task Up">
                                ⬆️
                            </button>
                            <button className="down-btn" onClick={() => moveTaskDown(index)} title="Move Task Down">
                                ⬇️
                            </button>
                            <button className="del-btn" onClick={() => delTask(index)} title="Delete Task">
                                🗑️
                            </button>
                        </li>
                        )
                    }
</ol>

            </div>
        </div>
    </>
}
export default ToDoList
