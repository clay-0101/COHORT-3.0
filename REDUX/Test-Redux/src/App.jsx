import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Decrement, Increment } from './Features/counter'

const App = () => {
  console.log('Renderinng....')
 let dispatch =  useDispatch()
 let count = useSelector((state)=>state.counter.value)
  return (
    <div className='p-10'>
     <p className='text-3xl mb-5'>Count is = {count}</p>
     <button 
     onClick={()=>dispatch(Increment())}
     className='bg-gray-950 text-white px-3 py-1 mr-2 active:scale-95'>Plus</button>
     <button
     onClick={()=>dispatch(Decrement())}
      className='bg-gray-950 text-white px-3 py-1 active:scale-95'>Minus</button>
    </div>
  )
}

export default App