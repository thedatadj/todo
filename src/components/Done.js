import arrow from '../icons/white-arrow.svg'

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
    const data =
    [
        "Feed the birds",
        "Do the homework"
    ]
    return (
        <div className='done'>
            <h1>Completed tasks</h1>
            <div>
                {data.map((task) => <DoneTask done={task}/>)}
            </div>
            <div>
                <img src={arrow} alt='arrow'/>
            </div>
        </div>
    )
}
export default Done