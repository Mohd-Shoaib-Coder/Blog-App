import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row border border-gray-300 rounded-3xl p-4 shadow-md hover:shadow-lg transition duration-300 gap-4 bg-white">
        
        {/* Image */}
        <Link to={`/post/${_id}`} className="flex-shrink-0">
          <div className="h-48 md:h-40 w-full md:w-64 overflow-hidden rounded-2xl border border-gray-200">
            <img
              src={`https://blog-app-ve13.onrender.com${cover}`}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        {/* Text */}
        <div className="flex flex-col justify-between flex-1">
          <div className="space-y-2">
            <Link to={`/post/${_id}`}>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800 hover:underline">
                {title}
              </h1>
            </Link>
            <p className="text-gray-700 text-sm md:text-base">{summary}</p>
          </div>

          <div className="mt-3 text-sm text-gray-500">
            <p>By <span className="font-medium text-gray-700">{author?.name}</span></p>
            <p>{format(new Date(createdAt), "MMM d, yyyy • HH:mm")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
