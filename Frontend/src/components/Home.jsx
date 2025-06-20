import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";



const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:4000/post");
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


    <div className="w-[1000px]  mx-auto sm:w-[400px] md:w-[650px] lg:w-[1000px]   ">



      {posts.length > 0 ? (

        posts.map((post) => <Post key={Post._id} {...post} />)
        
      ) : (
        <p>No Post Available</p>
      )}


    </div>



  );
};

export default Home;
