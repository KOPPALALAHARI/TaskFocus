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

  const clearTasks = () => {
    setTasks([]);
  }
  return(
    <div class="task-container">
      <h1 class="title">Task Remainder</h1>
      <p class="tag-line">Our Friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks} 
      updateTask={updateTask} 
      deleteTask={deleteTask}/>
      <Progresstracker tasks={tasks} />
      {tasks.length > 0 && (<button onClick = {clearTasks} className="clear-btn">Clear All Tasks</button>)}
      {/* when tasks are added then only the clear task button should visible otherwise it should be unvisible*/}
    </div>
  )
}

export default App;