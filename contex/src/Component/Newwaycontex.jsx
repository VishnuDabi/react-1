import React from 'react'
import { useContext } from 'react'
import { Fname,Lname } from '../App'
import First from './First';
const Newwaycontex = () => {
    let fnm=useContext(Fname);
    let lnm=useContext(Lname);
  return (
    <>
        <hr />
        <h3>Newwaycontex component is running</h3>
        <h1>{fnm} {lnm} </h1>
        <First/>
    </>
  )
}

export default Newwaycontex