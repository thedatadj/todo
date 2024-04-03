import { createContext, useContext, useState } from 'react'

const DoneContext = createContext(undefined)

export const DoneProvider = ({children}) =>
{
    const [state, setState] = useState(['Feed the bird'])
    return <DoneContext.Provider value={{state, setState}}>{children}</DoneContext.Provider>
}

export const useDoneContext = () => useContext(DoneContext)