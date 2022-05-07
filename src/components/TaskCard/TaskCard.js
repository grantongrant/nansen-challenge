import React from "react";
import './TaskCard.css';

const TaskCard = ({task, markDone}) => {

    const handleSubmit = async (name) => {
        await markDone(name);
    };

    return (
        <div className="task-card">
            <div className="task-name">{task["name"]}</div>
            {task["done"] === true ? 
            <button className="button gray card-button">Done</button> :
            <button className="button light-blue card-button" onClick={e => handleSubmit(task["name"])}>Mark as Done</button>}
        </div>
    )
}

export default TaskCard;