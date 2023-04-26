import React, { createContext } from 'react'
import First from './First';
let Name;
let Lname;
const App = () => {
  Name=createContext();
  Lname=createContext();
  return (
    <>
      <h1>app component</h1>
      <Name.Provider value='name'>
        <Lname.Provider value='lname:'>
          <First/>
        </Lname.Provider>
      </Name.Provider>
    </>
  )
}

export default App
export {Name,Lname};
