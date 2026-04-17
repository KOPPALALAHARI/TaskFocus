function Progresstracker({tasks}){
    const completedTasks = tasks.filter((t) => t.completed).length; //filter create new array containing only tasks that are completed
    const totalTasks = tasks.length;    //getting total no of tasks  
    const percentage = totalTasks == 0 ? 0 : (completedTasks / totalTasks) * 100; //calculating percentage of total tasks completed
    //if totalTasks==o we set progess to 0% otherwise we calculate the completed tasks by dividing completed tasks/totalTasks 
    //& multiply with 100
    return(
        <div className="progress-tracker">
            <p>
                {completedTasks} of {totalTasks} tasks completed   {/*completed tasks of total tasks*/}
            </p>
            <div className="progress-bar">
                <div className="progress"
                    style={{width:`${percentage}%`}}>   {/*to fill progress bar of percentage of completed tasks out of total tasks*/}
                </div>

            </div>
           
        </div>
    );
}
export default Progresstracker;



