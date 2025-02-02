import React from "react";
import { format } from "date-fns"
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, createdAt, author }) => {

  return (
    <div className="mt-10 flex justify-center items-center w-full  ">


      <div className="flex  border-2 border-gray-400 max-h-60 w-full 
           rounded-3xl p-4 shadow-xl shadow-gray-300 hover:shadow-gray-400 ">
        <Link to={`/post/${_id}`}>

       
          <div className="h-[180px] w-[300px] border-2 border-green-600 overflow-hidden rounded-2xl ">

            <img
              className="h-full w-full object-cover"
              // src={'http://localhost:4000/' + cover}
              // src="src/assets/react.svg"

              src={`https://blog-app-x01e.onrender.com${cover}`}


              alt="sorry"
            />



          </div>
        </Link>

        <div className="flex justify-center items-start flex-col gap-8  ">

       {/* title */}

          <div className=" px-4">
            <Link to={`/post/${_id}`}>
              <h1 className="text-2xl font-semibold">
                {title}
              </h1>
            </Link>
          </div>


          <div className="px-4">
            <p className="font-medium">{summary}</p>
            <p className="font-medium">{author.name} </p>
            <date className="text-sm text-gray-500">{format(new Date(createdAt), 'MMM d,yyyy HH:mm')}</date>
          </div>


         
        </div>



      </div>


    </div>
  );
};

export default Post;
