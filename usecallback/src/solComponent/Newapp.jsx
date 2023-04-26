import React, { useCallback, useState } from 'react'
import Newchild from './Newchild';

const Newapp = () => {
    let [num, updatenum] = useState(0);
    let [count, updatecount] = useState([])
    let show=useCallback(()=>updatecount(
        (v)=>[...v,'new data']),[count]);
    //   let show=()=>{
    // updatecount((v) => [...v, 'new item'], [count])
    //   }
    return (
        <>
            <h1>app component is runnning</h1>
            <Newchild count={count} show={show} />
            <input type='text' value={num} readOnly />
            <button onClick={() => { updatenum(num + 1) }}>icreament</button>
            <hr />
        </> 
    )
}

export default Newapp