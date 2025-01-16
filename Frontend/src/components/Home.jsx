import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";



const Home = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {

    fetch("http://localhost:4000/post").then(response => {

      response.json().then(posts => {
        setPosts(posts)
      })
    })
  }, []


  )
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
