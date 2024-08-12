import React ,{createContext}from 'react'

export const MainContext = createContext()

export  const  MyContextProvider = ({children}) => {
   const Name = "Narendra"
  return (
   <MainContext.Provider value={Name}>
      {children}
   </MainContext.Provider>
  )
}
