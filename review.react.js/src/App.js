import React from 'react';
import Data from './pages/Data';
import Login from './pages/loginpage/Login';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';


const App = () => {
  

  return (

    <div>
         <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Login/>}></Route>
        {/* <Route path= "Home" element={<Home/>}></Route>  */}
        <Route path= "Data" element={<Data/>}></Route>
        <Route path='*' element={<Navigate to={"/"}/>}></Route>
       
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App