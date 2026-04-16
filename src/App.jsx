import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
import { useEffect,useState } from "react";
import "./Style.css";
function App(){
  const [tasks,setTasks] = useState([])

  useEffect(() => {
    localStorage.setItem
    ("tasks",JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  
  const updateTask = (updatedTask,index) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks} 
      updateTask={updateTask} 
      deleteTask={deleteTask}/>
      <Progresstracker tasks={tasks} />
      <button>Clear All Tasks</button>
    </div>
  )
}

export default App;