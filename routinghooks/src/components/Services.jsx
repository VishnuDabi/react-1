import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useLocation,useParams,useNavigate} from 'react-router-dom'
const Services = () => {
    let loc=useLocation();
    let p=useParams();
    let nav=useNavigate();
  return (
    <>
        <h1 className='text-danger '>Services component is running</h1>
        <h2>path:- {loc.pathname} </h2>
        {console.log(p)};
        <h2>nav:- {nav} </h2>
    </>
  )
}

export default Services