import React from 'react'

export default function Hoc(NewComponent) {
  return (props)=>(
   <NewComponent greeting='Hello From Function HOC' {...props} />
  )
}
