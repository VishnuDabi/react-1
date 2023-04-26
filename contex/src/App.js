import React, { createContext} from 'react';
import First from './Component/First'
import Newwaycontex from './Component/Newwaycontex';
let Fname;
let Lname;
const App = () => {
  Fname=createContext();
  Lname=createContext();
  return (
    <>
      <h1>App component is running</h1>
      <Fname.Provider value={'programmers'}>
      <Lname.Provider value={'point'}>
      <First/>
      <Newwaycontex/>
      </Lname.Provider>
      </Fname.Provider>
    </>
  )
}

export default App
export {Fname,Lname};