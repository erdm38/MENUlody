import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add/Add'; // Import Add component
import List from './pages/List/List'; // Import List component
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
        <hr/>
        <div className="app-content">
         <Sidebar/>
         <Routes>
           <Route path="/add" element={<Add/>}/> 
           <Route path="/list" element={<List/>}/> 
         </Routes>
        </div> 
    </div>
  )
}

export default App
