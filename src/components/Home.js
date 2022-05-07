import React, { useState, useEffect } from "react";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero/Hero";

const Home = () => {

    const [tasks, setTasks] = useState([]);

    const buildTasks = () => {
      const taskData = [];
  
      for (let i = 0; i < 12; i++) {
        taskData[i] = {
          "name": "Todo Task " + (i+1),
          "done": false
        };
  
        if (i % 2 === 0) {
          taskData[i]["done"] = true;
        };
      };
  
      setTasks([...taskData]);
    };
  
    useEffect(() => {
      buildTasks();
    }, []);

    const markDone = (name) => {
    
      let newTasks = [...tasks]
      newTasks.forEach(task => {
        if (task["name"] === name) {
          task['done'] = true;
        }
        newTasks = [...newTasks]
     })
     setTasks([...newTasks])
    };

    return (
        <>
            <Hero/>
            <Gallery tasks={tasks} markDone={markDone}/>
        </>
    )
};

export default Home;