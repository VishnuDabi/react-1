import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Link,Route} from 'react-router-dom'
import Home from './components/Home'
import Contactus from './components/Contactus'
import PageNotFound from './components/PageNotFound'
import Services from './components/Services'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/services'element={<Services/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/services' element={<Services/>} ></Route>
        <Route path='/*' element={<PageNotFound/>} ></Route>
      </Routes>
      
      <br/>
      <Link to={'/home'}>Home</Link>
      <Link to={'/contactus'}>Contactus</Link>
      <Link to={'/services'}>Services</Link>
      <div>
      <h1 className="text-bg-success  ">app component is running</h1>
      </div>
      </>
  )
}

export default App