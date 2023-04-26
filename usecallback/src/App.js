import React, {  useState } from 'react'
import Child from './Child';
import Newapp from './solComponent/Newapp';

const App = () => {
  let[num,updatenum]=useState(0);
  let[count,updatecount]=useState([])
  function show()
  {
    updatecount((v)=>[...v,'new item'])
  }
  return (
    <>
      <h1>app component is runnning</h1>
      <Child count={count} show={show}/>
      <input type='text' value={num} readOnly />
      <button onClick={()=>{updatenum(num+1)}}>icreament</button>
      <hr/>
      <Newapp/>
    </>
  )
} 

export default App