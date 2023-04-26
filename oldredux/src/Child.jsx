import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cube,Square } from './Action';
const Child = () => {
    let init=useSelector((store)=>store.SquareCube);
    let dispatch=useDispatch();
  return (
    <>
        <h1>child component</h1>
        <input type="text" value={init} readOnly />
        <button onClick={()=>{
            dispatch(Cube())
        }}>cube</button>
        <button onClick={()=>{dispatch(Square())}}>Square</button>
    </>
  )
}
export default Child