import React, { useState } from "react";
import { GrStar } from "react-icons/gr";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  const createNewPost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    if (files && files[0]) {
      formData.append("files", files[0]);
    }

    const response = await fetch("https://blog-app-ve13.onrender.com/post", {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="px-4 py-10 w-full flex justify-center">
      <form
        onSubmit={createNewPost}
        encType="multipart/form-data"
        className="w-full max-w-4xl space-y-6"
      >
        <input
          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
          name="title"
          type="text"
          placeholder="Enter your blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-lg p-3 text-sm"
          name="summary"
          type="text"
          placeholder="Enter a short summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <input
            className="border border-gray-300 rounded-lg p-2 w-full sm:w-[300px] text-sm"
            type="file"
            name="upload"
            onChange={(e) => setFiles(e.target.files)}
          />
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <span>Upload image</span>
            <GrStar className="text-red-600 text-xs" />
          </div>
        </div>

        <div>
          <ReactQuill
            value={content}
            onChange={(newValue) => setContent(newValue)}
            className="h-[200px] bg-white"
          />
        </div>

        <div className="flex justify-center pt-8">
          <button
            type="submit"
            className="bg-black text-white px-8 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
