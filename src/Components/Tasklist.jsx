function Tasklist({tasks,updateTask,deleteTask}){
    const toggleComplete = (index) => {
        const updatedTask = {...tasks[index],completed : !tasks[index].completed};
        updateTask(updatedTask,index);
    }
    return(
        <ul className="task-list">
            {tasks.map((task,index) =>(
                <li key={index} className={task.completed ? "completed" : ""}>
                    <div>
                        <span>
                            {task.text}
                            <small>({task.priority},{task.category})</small>
                        </span>
                    </div>
                    <div>
                        <button className="undo-btn" onClick = {() => toggleComplete(index)}>
                        {task.completed ? "Undo" : "Complete"}</button>
                        <button className="delete-btn" onClick = {() => deleteTask(index) }>Delete</button>
                    </div>

                </li>
            ))}
        </ul>
    )
}
export default Tasklist;