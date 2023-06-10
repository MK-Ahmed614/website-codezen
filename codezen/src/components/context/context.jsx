import React from 'react'
import { createContext, useContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [bageid, setbageid] = useState(null)

  return (
    <AppContext.Provider value={{ bageid, setbageid }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}