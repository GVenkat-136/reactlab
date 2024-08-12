import React ,{useContext}from 'react'
import {MyContextProvider , MainContext} from './MyContext'

const SayHello = () =>{
   const Name = useContext(MainContext)
   return (
      <h1>{Name}</h1>
   )
}

export default function Main() {
  return (
    <MyContextProvider>
      <SayHello />
    </MyContextProvider>
  )
}
