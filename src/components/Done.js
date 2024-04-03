import arrow from '../icons/white-arrow.svg'
import { useDoneContext } from './DoneContext'

const DoneTask = (props) =>
{
    return (
        <div className='done-task'>
            <button></button>
            <div className='done-specific'>
                {props.done}
            </div>
        </div>
    )
}

const Done = () =>
{
    const done = useDoneContext()
    return (
        <div className='done'>
            <h1>Completed tasks</h1>
            <div>
                {done.state.map((task) => <DoneTask done={task}/>)}
            </div>
            <div>
                <img src={arrow} alt='arrow'/>
            </div>
        </div>
    )
}
export default Done