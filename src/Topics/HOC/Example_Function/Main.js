import React from 'react'
import Hoc from './Hoc'

const Greeting  = (props)=>{
   return(
      <>
         <h1>{props.greeting}</h1>
         <h1>Narendra</h1>
      </>
   )
}

const NewComponent = Hoc(Greeting)


export default function Main() {
  return (
   <NewComponent />
  )
}

