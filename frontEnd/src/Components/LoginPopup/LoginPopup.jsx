import React, { useContext } from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import CloseIcon from '@mui/icons-material/Close';
import { RecipesContext } from '../../context/RecipesContext.jsx';
import axios from "axios";
const LoginPopup = ({setShowLogin}) => {

  const{url,setToken} = useContext(RecipesContext)
    const[currState,setCurrState]=useState("Login")
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
  })
  
  const onChangeHandler =(event)=>{
    const name= event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async(event)=>{
   event.preventDefault()
   let newUrl= url;
   if(currState==="Login"){
     newUrl +="/api/user/login"
   }
   else{newUrl +="/api/user/register"}

   const response= await axios.post(newUrl,data);
    
   if(response.data.success){
   setToken(response.data.token);
   localStorage.setItem("token",response.data.token);
   setShowLogin(false)
   }
   else{
     alert(response.data.message);
   }
  }
  
 
  
  
  
  
  
    return (
    <div className='login-popup'>
 <form onSubmit={onLogin} className="login-popup-container">
     <div className="login-popup-title">
         <h2>{currState}</h2>
         <CloseIcon onClick={() => setShowLogin(false)} />
     </div>
    <div className="login-popup-inputs">
        {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Name" required/>}
         <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email" required />
         <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />

    </div>
    <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>I agree to the terms of use and privacy policy.</p>
    </div>
    {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p> }

 </form>
    </div>
  )
}

export default LoginPopup
