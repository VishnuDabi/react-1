import React from 'react'
const Child = ({count,show}) => {
  console.log('child rendered');
  return (
    <>
        <h1>child componenet is runnning</h1>
        
        {count.map((v,i)=>{
            return <h3 key={i}>{v}</h3>
        })}
        <button onClick={show}>add count</button>
    </>
  )
}

export default Child;