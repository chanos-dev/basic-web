import React, { useState, createContext, useContext } from 'react'

export const stateContext = createContext();

const getContext = () => {
    return {
        value1: 'TEST',
        value2: 99,
        value3: 3.14,
    }
}

export default function useStateContext() {
    const { context, setContext } = useContext(stateContext);
    return {
        context,
        setContext: (obj) => { setContext({ ...context, ...obj }) }
    };
}

export function ContextProvider({ children }) {
    const [context, setContext] = useState(getContext());

    return (
        <stateContext.Provider value={{ context, setContext }}>
            {children}
        </stateContext.Provider>
    )
}
