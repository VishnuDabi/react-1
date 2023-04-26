import React from 'react'
import counterSlice, { cube, square } from './CounterSlice'
import store from './Store'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import Child from './Child'
const App = () => {
  store.subscribe(() => console.log(store.getState()));
  let dispatch = useDispatch();
  let [init, updatedata] = useState(store.getState());
  return (
    <>
      <h1>App component is running</h1>
      <h2>{init} </h2>
      <button onClick={() => {dispatch(square());
        updatedata(store.getState())
      }}>Square</button>
      <input type='text' value={init} readOnly />
      <button onClick={()=>{dispatch(cube())
      updatedata(store.getState())
      }}>Cube</button>
      <button onClick={()=>{updatedata(store.getState())}}>get Value</button>
      <Child/>
    </>
  )
}

export default App;