import React from 'react'

export default function Hoc(NewComponent) {
  return class extends React.Component{
   render(){
     return <NewComponent greeting="Hell From Class HOC" {...this.props} />
   }
  }
}
