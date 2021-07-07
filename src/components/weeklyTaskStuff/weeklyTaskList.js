import React from 'react';
import WeeklyTasks from './weeklyTasks';


const WeeklyTaskList = ({weeklyTaskList, handleToggle, handleFilter}) => {
    return (
        <div>
            {weeklyTaskList.map(weeklyTasks => {
                return (
                    <WeeklyTasks weeklyTasks={weeklyTasks} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default WeeklyTaskList;