import React, { useContext, useState } from "react";
import {v4} from 'uuid'

export const TaskContext = React.createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, settasks] = useState([]);


  const addTask = (title, description) => {
    settasks([...tasks, {
      id:v4(),
      title:title, 
      description:description} 
    ])
  }

  const deleteTask = (id) =>{
    settasks(tasks.filter(t=>t.id != id))
  }


  const updateTask = (id, task) =>{
    console.log(id, task)
    settasks([...tasks.map(t=>t.id==id ? {...t, ...task} : t )])
  }
 
  return (
    <TaskContext.Provider value={{ tasks ,addTask, deleteTask ,updateTask }}>{children}</TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
