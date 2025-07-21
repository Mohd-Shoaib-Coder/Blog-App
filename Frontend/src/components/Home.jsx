import React, { useState, useEffect } from "react";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://blog-app-ve13.onrender.com/post");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mt-6">
      {posts.length > 0 ? (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Post Available</p>
      )}
    </div>
  );
};

export default Home;
