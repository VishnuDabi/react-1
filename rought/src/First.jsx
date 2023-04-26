import React,{useState} from 'react'
import { useContext } from 'react'
import { Name,Lname } from './App'

const First = () => {
    let nm=useContext(Name)
    let lnm=useContext(Lname)
    let [auth,updateauth]=useState(false);
    const login=()=>{
      updateauth(true);
    }
  return (
    <>
        <h1>First component</h1>
        <button onClick={login}>Login</button>
        {auth===true?<h1>Login done</h1>:<h1>Login fail</h1>}
        <p>{nm} {lnm} </p>
    </>
  )
}

export default First