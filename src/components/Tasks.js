import arrow from '../icons/black-arrow.svg'

const Task = (props) =>
{
    return (
        <div className='task'>
            <button></button>
            <div className='task-specific'>
                {props.task}
            </div>
        </div>
    )
}



const Tasks = () =>
{
    const tasks =
    [
        "Walk the dog",
        "Buy groceries",
        "Do exercise"
    ]
    return (
        <div className='tasks'>
            <div>
                {tasks.map((task) => <Task task={task} />)}
            </div>
            <div>
                <img src={arrow} alt='arrow'/>
            </div>
        </div>
    )
}
export default Tasks