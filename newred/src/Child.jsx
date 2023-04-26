import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, { cube, square } from "./CounterSlice";
import store from "./Store";
const Child=()=>{
    let dispatch=useDispatch();
    let[init,updatedata]=useState(store.getState());
    return (
        <>
            <h1>child component is running</h1>
            <button onClick={()=>{dispatch(square())
            updatedata(store.getState())}}>square</button>
            <input type="text"  value={init} readOnly/>
            <button onClick={()=>{dispatch(cube())
            updatedata(store.getState())}}>cube</button>
        </>
    )
}
export default Child;