import React, { useContext } from"react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../Context/userContext";

const Login=()=>{


    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("") ;
    const [redirect,setRedirect]=useState(false);
    const {setUserInfo}=useContext(UserContext)


    const handleLogin=async()=>{

        if(!email || !password){

            alert("Please fill in the empty spaces");

            return ;
        }

        
        const loginData={

            email:email,
            password:password,
        }

     try{

        const response=await fetch("https://blog-app-x01e.onrender.com/login",{

            method:"POST",
            headers:{
    
                "Content-Type":"application/json",
            },
    
          body:  JSON.stringify(loginData),
          credentials:"include",
           })
    
          
           const data=await response.json();
    
           if(response.ok){
    
           alert("login successfull");
           
           

        setUserInfo(data);
        setRedirect(true);
           
           }else{
    
        alert(data.message || "login failed wrong credentials")
           }
    

     }catch(error){

       
        alert("An error occurred .please try again later");
     }
       

    

      }
        
    
if(redirect){
    return <Navigate to={"/home"} />
}

    return (

        <>
        <div className="mt-32">

        <div className=" flex justify-center items-center text-3xl font-semibold ">

Login 
</div>

<div>

<form   onSubmit={(e) => e.preventDefault()} className="flex justify-center items-center flex-col mt-10 ">

    <input className="border border-black rounded-md h-[37px] w-[288px] mb-3 px-5 text-sm font-light" type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>

    <input className="border border-black rounded-md h-[37px] w-[288px] mb-3 px-5 text-sm font-light" type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
</form>

</div>


<div className="flex justify-center items-center flex-col">

<button onClick={handleLogin} className="bg-black text-white h-[45px] w-[100px] rounded-md mt-3">
    Login
</button>


<p className="mt-3 text-sm font-normal">

    Don't have an account?
    <Link to="/signup" className="border-b-2 border-black text-sm font-normal">signup</Link>
    
</p>

</div>
        </div>
       
        </>
    )
}

export default Login;