import React from 'react';

const Tasks = ({tasks, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={tasks.id} key={tasks.id + tasks.task} name='tasks' value={tasks.id} onClick={handleClick} className={tasks.complete ? "tasks strike" : "tasks"}>
            {tasks.task}
        </div>
    );
};

export default Tasks;