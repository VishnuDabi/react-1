import React, { useEffect, useState } from 'react'

const App = () => {
  let [name,updatename]=useState('');
  let [names,updatenames]=useState([]);
  useEffect(()=>{
    localStorage.setItem('name',names);
  })
  return (
    <>
      <h1>To Do list using React</h1>
      {names.map((v,i)=>{
        return <div key={i}>{v}
        <button onClick={()=>{
          let d=localStorage.getItem('name');
          d=d.split(',');
          d=d.filter((t)=>{
            return t!==v;
          })
          updatenames(d);
          updatename(v);
        }}>
          Edit
        </button>
        {/* <button
        onClick={()=>{
          let d=localStorage.getItem('name');
          d=d.split(',');
          d=d.filter((t)=>{
            return t!==v;
          })
          updatenames(d);
        }}>X</button> */}
        </div>
      })}
      Enter Name<input type='text' name='name' value={name} onChange={(e)=>{updatename(e.target.value)}} />
      <button onClick={(e)=>{updatenames([...names,name])}}
      >Add in ToDo list</button>
    </>
  )
}

export default App