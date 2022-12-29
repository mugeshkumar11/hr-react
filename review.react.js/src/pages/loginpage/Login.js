import React  from "react";
import { useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import {TextField,Button} from '@mui/material';
// import {statecontext} from '../context/Context';
import './login.css';
import User from './credent.json';
// import { useForm } from "react-hook-form";


function Login() {
  const Navigate = useNavigate();
  const [username, setusername,] = useState('');
  const [userpassword, setpassword] = useState('');
  const [error, setError] = useState('');
//   const { register, handleSubmit } = useForm();
//   const onSubmit = handleSub => console.log(handleSub);

//   const { state, dispatch } = useContext(statecontext);
//   console.log("statecontext", state.event);



  function handleUserName(eve) {
        console.log("eve", eve);
        setusername(eve.target.value);
    }
  const handleUserPassword = (eve) => {
    setpassword(eve.target.value);

  };
   
  const handleSub = (eve) => {
    eve.preventDefault();
    
   console.log("state", username, userpassword,User);
  User.filter((a)=>{
        if(a.username===username && a.password===userpassword){
            return Navigate('Data')
  
        }else{
         setError("invalid username and password")
          return;
         }
      })
  
      if(username===""||userpassword===""){
         setError("fill all required fields");
         return;
      }else if(username.length<3){
        setError("enter value username");
        return;
      }else if(userpassword.length<4){
        setError("enter value userpassword");
        return;
      }
    


    //    dispatch({type:"login", payload:state.isAuthenticated})

    //   sessionStorage.setItem("islogged",JSON.stringify(true));
    //   JSON.filter((item)=>{
    //     if(item.username===username && item.password===userpassword){
    //       return Navigate("/Home")

    //     }
    //   })

     
    
      console.log("state",username,userpassword,JSON);
};


  return (
   
    <div className="mugesh">
       
      <section className={"loginmpform"}>
        <section className={"container"}>
          <div className={"loginflex"}>
            <h1>Login</h1>
            <form>
              <div className={"input"}>
               
                <TextField id="outlined-basic" label="username" variant="outlined" value={username} placeholder={"Username"} onChange={handleUserName} />
              </div>

              <div className={"input"}>
               
                <TextField id="outlined-basic" label="password" variant="outlined"  type={"password"} value={userpassword} placeholder={"Password"} onChange={handleUserPassword}  />
              </div>
              <div className={"btn"}>
                
                <Button variant="contained" onClick={(eve) => handleSub(eve)}>Submit</Button>
              </div>
              <div className="errorpage">
              <h4>{error}</h4>
              </div>
            </form>
           
      
          </div>
        </section>
      </section>
     
    </div>
  );
}

export default Login;
