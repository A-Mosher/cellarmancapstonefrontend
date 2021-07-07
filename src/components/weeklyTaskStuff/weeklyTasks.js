import React from 'react';

const WeeklyTasks = ({weeklyTasks, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={weeklyTasks.id} key={weeklyTasks.id + weeklyTasks.task} name='weeklyTasks' value={weeklyTasks.id} onClick={handleClick} className={weeklyTasks.complete ? "weeklyTasks strike" : "weeklyTasks"}>
            {weeklyTasks.task}
        </div>
    );
};

export default WeeklyTasks;