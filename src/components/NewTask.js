import { useState } from 'react'
const NewTask = () =>
{
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