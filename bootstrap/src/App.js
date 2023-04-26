import React from 'react'
import Externalcss from './Externalcss'
import Inlinecss from './Inlinecss'
import Internalcss from './Internalcss'
const App = () => {
  return (
    <>
        <h1>App component is running</h1>
        <Inlinecss/>
        <Internalcss/>
        <Externalcss/>
    </>
  )
}

export default App