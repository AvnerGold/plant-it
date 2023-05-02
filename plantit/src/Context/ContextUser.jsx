import { View, Text } from 'react-native'
import React, { createContext } from 'react'

export const ContextUser = createContext();

const ContextUserProvider = ({ children }) => {

    const value = {

    }

    return (
        <ContextUser.Provider value={value}>
            {children}
        </ContextUser.Provider>
    )
}

export default ContextUserProvider