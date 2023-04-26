import React, { useMemo, useState } from 'react'

const App = () => {
  let [num, updatenum] = useState(1)
  let [num1, updatenum1] = useState(1)
  // let c=increament(num)
  let c = useMemo(() => increament(num), [num]);
  function increament() {
    for (let i = 1; i <= 200000000; i++) {

    }
    return num * 1000;
  }
  // increament()
  return (
    <>
      <h1>app component {c}</h1>
      <button onClick={() => { updatenum(num + 1) }}>increament</button>
      <input type='number' value={num} readOnly />
      <br />
      <button onClick={() => { updatenum1(num1 + 1) }}>increament</button>
      <input type='number' value={num1} readOnly />

    </>
  )
}

export default App