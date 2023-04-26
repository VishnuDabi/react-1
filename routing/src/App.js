import React from 'react';
import { Route,Link,Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import PageNotFound from './components/PageNotFound';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/*' element={<PageNotFound/>} ></Route>

      </Routes>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/services'}>services</Link>
      {/* <Link to={'/Any'}>Any</Link> */}
      <h1 className=''>App component is running</h1>
    </>
  )
}

export default App;