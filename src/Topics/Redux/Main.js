import React from 'react'
import Counter from './Counter'
import { MyStore } from './Store'
import { Provider } from 'react-redux'


export default function Main() {
  return (
    <Provider store={MyStore}>
      <Counter />
    </Provider>
  )
}
