import React, { useEffect, useState } from 'react';
import "./Gallery.css";
import TaskCard from '../TaskCard/TaskCard';
import CompletionBar from '../CompletionBar/CompletionBar';

const Gallery = ({tasks, markDone}) => {


    const [percentage, setPercentage] = useState();

    useEffect(() => {
        const calculatePercentageComplete = (tasks) => {
            let done = 0;
            let total = 0;
        
              for (let i = 0; i < tasks.length; i++) {
                if (tasks[i]["done"] === true) {
                  done++;
                };
                total++
                };
                
              setPercentage(Math.floor(done/total * 100));
          };
        calculatePercentageComplete(tasks)
    }, [tasks]);
    
    return (
        <div className="gallery-page">
            <div className="completion-bar-container">
                <CompletionBar num={percentage}/>
            </div>
            <div className="gallery-container">
                {tasks && tasks.map((task, index) => (
                    <div className="task-container three-four" key={index}>
                        <TaskCard task={task} markDone={markDone}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;