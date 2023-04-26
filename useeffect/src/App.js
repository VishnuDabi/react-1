import React, { useEffect, useState } from 'react'

const App = () => {
  let [n1,updaten1]=useState(0);
  let [n2,updaten2]=useState(0);

  // it run always when page load,refresh and changes in any state variable
  /*useEffect(()=>{
    console.log('Use effect is running');
  })*/

    // only run when page refresh or reload
  /*useEffect(()=>{   
    console.log('Use effect is running');
  },[])*/

  // it run only when state variable n1 change or page refresh
  useEffect(()=>{
    console.log('Use effect is running');
  },[n1])
  return (
    <>
      <h1>App Component is running</h1>
      <h2>{n1} {n2} </h2>
      <button onClick={()=>{
        updaten1(n1+=1);
      }}>increament First</button>
      <button onClick={()=>{
        updaten2(n2+=1);
      }}>increament Second</button>

    </>
  )
}

export default App