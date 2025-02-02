import React from "react";
import { GrStar } from "react-icons/gr";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState} from "react";
import { Navigate } from "react-router-dom";


 const CreatePost=()=>{




    const [title,setTitle]=useState("");

    const [summary,setSummary]=useState("");
    
    const [content,setContent]=useState("");
    
    const [files,setFiles]=useState("");

    const [redirect,setRedirect]=useState(false);

  const createNewPost=async(e)=>{
        e.preventDefault();
       
        console.log(files)


        // const postData={

        //     title:title,
        //     summary:summary,
        //     content:content,
        //     files:files[0],


        // }

        const formData=new FormData();

        formData.append("title",title);
        formData.append("summary",summary);
        formData.append("content",content);

        if (files && files[0]) {
            formData.append("files", files[0]); 
        }
    
    
       
        
    const response=await   fetch("https://blog-app-x01e.onrender.com/post",{

        method:"POST",
        body:formData,
        credentials:"include",
       })
       console.log(await response.json());
       if(response.ok){

        setRedirect(true);
       }


    }


    if(redirect===true){

        return <Navigate to={"/home"} />
    }


    return (





        <div className=" border-  border-black flex justify-center items-center flex-col  mt-5 ">

      <form onSubmit={createNewPost} enctype="multipart/form-data" className=" md:w-[600px] lg:w-[900px] flex justify-center  flex-col space-y-6">

       <input className="border-[1px] border-gray-400 rounded-lg p-2 w-full" name="title" type="text" placeholder="Title" value={title}  onChange={(e)=>setTitle(e.target.value)} />


       <input className="border-[1px] border-gray-400 rounded-lg p-2 w-full " name="summary" type="text" placeholder="Summary" value={summary} onChange={(e)=>setSummary(e.target.value)} />

       <div className="flex items-center ">

       <input className="border-[1px] w-[350px]  p-1 rounded-lg border-gray-400 " type="file" name="upload"  placeholder=""  onChange={(e)=>setFiles(e.target.files)}/>

       <div className="flex  flex-row">
       <p  className="ml-8">Upload the images </p>
       <div className=" text-red-700 text-[10px]"><GrStar /></div>

       </div>
       </div>




       
        <div className=''>
             <ReactQuill onChange={(newValue)=> setContent(newValue)}
             
                         className='h-[200px]' />
        </div>  



        <div className="flex justify-center mt-16 ">

<button  className="bg-black text-white rounded-md mt-16 px-8 py-2">
    Create Post
</button>
</div>


      </form>





</div>


    )
}

export default CreatePost;