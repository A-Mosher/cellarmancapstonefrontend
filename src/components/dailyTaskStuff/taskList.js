import React from 'react';
import Tasks from './tasks';


const TaskList = ({taskList, handleToggle, handleFilter}) => {
    return (
        <div>
            {taskList.map(tasks => {
                return (
                    <Tasks tasks={tasks} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default TaskList;