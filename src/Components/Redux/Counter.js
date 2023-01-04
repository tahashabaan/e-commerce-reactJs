import React, { useState } from 'react'
import { Fragment } from 'react'

const Counter = () => {
  const [count , setCount] = useState(0)
  const incrementHandler = ()  => {
    setCount(count + 1)
  }
  const decrementHndler = () => {
    setCount(count - 1);
  }
  return ( 
   <div>
    <p>0</p>
 <button onClick={incrementHandler}>increment</button>
 <button onClick={decrementHndler}>decrement</button>
   </div>
  )
}

export default Counter;