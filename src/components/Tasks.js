// Styles
import '../styles/task.css'
// Assets
import arrow from '../icons/black-arrow.svg'
// Functions
import { useTaskContext } from './TaskContext'
import { useDoneContext } from './DoneContext'


const Task = (props) =>
{
    const tasks = useTaskContext()
    const done = useDoneContext()
    const buttonClick = () =>
    {
        const index = tasks.state.indexOf(props.task)
        const deltask = tasks.state.slice(0, index).concat(tasks.state.slice(index + 1))
        tasks.setState(deltask)
    }
    const doneClick = () =>
    {
        done.setState(done.state.concat(props.task))
        const index = tasks.state.indexOf(props.task)
        const deltask = tasks.state.slice(0, index).concat(tasks.state.slice(index + 1))
        tasks.setState(deltask)
    }
    return (
        <div className='task'>
            <div className='task-specific'>
                <button onClick={doneClick}></button>
                {props.task}
            </div>
            <button id='close' onClick={buttonClick}>x</button>
        </div>
    )
}


const Tasks = () =>
{
    const tasks = useTaskContext()
    return (
        <div className='tasks'>
            <div>
                {tasks.state.map((task) => <Task task={task} />)}
            </div>
            <div>
                <img src={arrow} alt='arrow'/>
            </div>
        </div>
    )
}
export default Tasks