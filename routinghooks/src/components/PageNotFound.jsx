import React from 'react'
import {useLocation} from 'react-router-dom';
const PageNotFound = () => {
  let loc=useLocation();
  return (
    <>
        <h1 className=''>Page not found</h1>
        <h2>path:- {loc.pathname} </h2>
    </>
  )
}

export default PageNotFound