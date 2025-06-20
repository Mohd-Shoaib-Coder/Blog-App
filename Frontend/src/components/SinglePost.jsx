import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatISO9075 } from "date-fns"

const SinglePost = ({ createdAt }) => {


  const [postInfo, setPostInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {

    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json()
          .then(postInfo => {
            setPostInfo(postInfo);
          })
      })

  }, [])

  if (!postInfo) return "";

  return (

    <div className="container mx-auto p-4 mt-10 max-w-4xl">
      <div className="border-gray-300 border p-6 rounded-lg shadow-lg">

        {/* Cover Image */}
         <div className="mb-4">
          <img
            className="max-h-[400px] w-full object-contain rounded-lg" // ✅ CHANGED: h-[400px] → max-h-[400px], object-cover → object-contain
            src={
              postInfo.cover
                ? `http://localhost:4000${postInfo.cover}`
                : "http://via.placeholder.com/400x200?text=No+Image"
            }
            alt={postInfo.title}
          />
        </div>


        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">{postInfo.title}</h1>

        {/* Author & Date */}
        <div className="text-sm text-gray-500 mb-3">
          <p>Author: {postInfo.author?.name || "Unknown"}</p>
          {/* <p className="text-sm text-gray-500">{format(new Date (createdAt), 'MMM d,yyyy HH:mm')}</p> */}
          <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        </div>

        {/* Summary */}
        <div className="text-gray-700 mb-4 mt-2 leading-relaxed">
          <h3 className="font-semibold mb-2">Summary:</h3>
          <p>{postInfo.summary}</p>
        </div>

        {/* Main Content */}
        <div className="text-gray-700 mt-2 leading-relaxed">
          <h3 className="font-semibold mb-2">Content:</h3>
          <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>

      </div>
    </div>



  )
}

export default SinglePost;



//src={`http://localhost:4000/${postInfo.cover}`}
