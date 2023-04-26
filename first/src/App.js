import React from 'react';
const App=()=>{
  // return <h1>app component is running</h1>  //single line ruturn
  /*
  return (
    <div>
      <h1>app component is running</h1>
      <p>this is paragraph inside container</p>
    </div>
  )
  */
    /*
    return (
      <React.Fragment>
        <h1>app component is running</h1>
        <p>React fragment tag </p>
      </React.Fragment>
    )
    */
    return (
      <>
        <h1>app component is running</h1>
        <p>syntactic sugar form of React fragment</p>
      </>
    )
  }

export default App;