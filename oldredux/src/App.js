import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cube,Square } from './Action';
import { SquareCube } from './SquareCube';
import store from './Store'
import Child from './Child';
const App = () => {
  store.subscribe(()=>{console.log(store.getState())})
  let init=useSelector((store)=>store.SquareCube);
  let dispatch=useDispatch();
  return (
    <>
      <h1>App component</h1>
      <button onClick={()=>{dispatch(Square())}}>square</button>
      <input type='text' value={init} readOnly />
      <button onClick={()=>{dispatch(Cube())}}>cube</button>
      <Child/>
    </>
  )
}
export default App