import { createContext, useContext, useState } from 'react'

const TaskContext = createContext(undefined)

export const TaskProvider = ({children}) =>
{
    const [state, setState] = useState(['Feed the dog', 'Exercise'])
    return <TaskContext.Provider value={{state, setState}}>{children}</TaskContext.Provider>
}

export const useTaskContext = () => useContext(TaskContext)