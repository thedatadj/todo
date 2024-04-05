import { useState } from 'react'
import { useTaskContext } from './TaskContext'
// Styles
import '../styles/newtask.css'
const NewTask = () =>
{
    const tasks = useTaskContext()
    const [state, setState] = useState("New task")

    const handleChange = (e) =>
    {
        setState(e.target.value)
    }
    const handleClick = () =>
    {
        if (state === "New task")
        {
            setState("")
        }
    }
    const buttonClick = () =>
    {
        tasks.setState(tasks.state.concat([state]))
        setState("")
    }
    return (
        <div className='newtask'>
            <input type="text"
                value={state}
                onChange={handleChange}
                onClick={handleClick}/>
            <button onClick={buttonClick}>Add +</button>
        </div>
    )
}
export default NewTask