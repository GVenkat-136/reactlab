import React, { useEffect, useState } from 'react'
import { increment,decrement } from './Slices'
import { useDispatch,useSelector } from 'react-redux'
import { useGetTodosQuery } from '../Rtk/Service'

export default function Counter() {
   const value = useSelector((state) => state.MainStore.value)
   const {data, error, isLoading} = useGetTodosQuery()
   console.log(data)
   const dispatch = useDispatch()
   const [show,setShow] = useState(true)

  const handeldecrement =() =>{
    if(value != 0 ){
      dispatch(decrement())
    }
  }

  useEffect(()=>{
    if(value != 0){
      setShow(false)
    }
  },[value])

  console.log(value,show);

   
  return (
    <div>
      <button  onClick={()=> dispatch(increment())} style={{margin:20}} >increment </button>
      {value}
      <button onClick={()=> handeldecrement()} style={{margin:20}} disabled={show} >decrement  </button>
    </div>
  )
}
