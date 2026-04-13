import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";
function App(){
  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our Friendly Task Manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

export default App;