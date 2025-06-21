import React from"react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Signup=()=>{


    const [fullname,setFullname]=useState("");

    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    const handleSignup=async()=>{

        if(!fullname || !email || !password){

            alert("please fill in all the feilds");

            return ;
        }

try{

    const signupData={

        name:fullname,
        email:email,
        password:password,
    };

    const response=await fetch("https://blog-app-ve13.onrender.com/signup",{

        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },

        body:JSON.stringify(signupData)
    });

    const data=await response.json();

    if(response.ok){

        alert("Signup Successfull");
        console.log(data);
    }else{

        alert(data.message || "Signup failed please try again later")
    }
}catch(error){

    console.error("error during signup",error);
    alert("An error occured please try again later")
}

    }

    return (

        <>
        <div className="mt-32">

        <div className=" flex justify-center items-center text-3xl font-semibold ">

Signup
</div>

<div>

<form onSubmit={(e)=>e.preventDefault()} className="flex justify-center items-center flex-col mt-10 ">

<input className="border border-black rounded-md h-[37px] w-[288px] mb-3 px-5 text-sm font-light" type="name" name="name" placeholder="Full Name" onChange={(e) => setFullname(e.target.value)}
/>

    <input className="border border-black rounded-md h-[37px] w-[288px] mb-3 px-5 text-sm font-light" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
    />

    <input className="border border-black rounded-md h-[37px] w-[288px] mb-3 px-5 text-sm font-light" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
    />



</form>

</div>


<div className="flex justify-center items-center flex-col">

<button className="bg-black text-white h-[45px] w-[100px] rounded-md mt-3" onClick={handleSignup}>
    Signup
</button>


<p className="mt-3 text-sm font-normal">

    Don't have an account?
    <Link to="/login" className="border-b-2 border-black text-sm font-normal">Login</Link>
    
</p>

</div>
        </div>
       
        </>
    )
}

export default Signup;