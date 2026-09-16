const Task = (props) => {
    
    const priorityClass =
    props.priority === "high"
      ? "priority-high"
      : props.priority === "medium"
      ? "priority-medium"
      : "priority-low";
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>

            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description"> {props.description}</p>
            <p className={priorityClass}>Priority: {props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>




            
        </div>
    )



}


export default Task;
