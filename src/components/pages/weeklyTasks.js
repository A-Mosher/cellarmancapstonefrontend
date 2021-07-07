import React, { useState } from 'react';
import weeklyData from '../weeklyTaskStuff/weeklyData.json';
import WeeklyHeader from '../weeklyTaskStuff/weeklyHeader';
import WeeklyTaskList from '../weeklyTaskStuff/weeklyTaskList';
import TaskForm from '../dailyTaskStuff/taskForm';
import './weeklyTasks.css';


function WeeklyTasks() {

    const [ weeklyTaskList, setWeeklyTaskList] = useState(weeklyData);

    const handleToggle = (id) => {
        let mapped = weeklyTaskList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setWeeklyTaskList(mapped);
    }

    const handleFilter = () => {
        let filtered = weeklyTaskList.filter(task => {
            return !task.complete;
        });
        setWeeklyTaskList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...weeklyTaskList];
        copy = [...copy, { id: weeklyTaskList.length + 1, task: userInput, complete: false }];
        setWeeklyTaskList(copy);
    }


    return (
        <div className='weeklyTasks'>
            <WeeklyHeader />
            <WeeklyTaskList weeklyTaskList={weeklyTaskList} handleToggle={handleToggle} handleFilter={handleFilter} />
            <TaskForm addTask={addTask} />
        </div>
    );
}

export default WeeklyTasks;