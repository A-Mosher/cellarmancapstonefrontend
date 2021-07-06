import React, { useState } from 'react';
import data from '../dailyTaskStuff/data.json';
import Header from '../dailyTaskStuff/header';
import TaskList from '../dailyTaskStuff/taskList';
import TaskForm from '../dailyTaskStuff/taskForm';
import './dailyTasks.css';


function DailyTasks() {

    const [ taskList, setTaskList] = useState(data);

    const handleToggle = (id) => {
        let mapped = taskList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setTaskList(mapped);
    }

    const handleFilter = () => {
        let filtered = taskList.filter(task => {
            return !task.complete;
        });
        setTaskList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...taskList];
        copy = [...copy, { id: taskList.length + 1, task: userInput, complete: false }];
        setTaskList(copy);
    }


    return (
        <div className='dailyTasks'>
            <Header />
            <TaskList taskList={taskList} handleToggle={handleToggle} handleFilter={handleFilter} />
            <TaskForm addTask={addTask} />
        </div>
    );
}

export default DailyTasks;