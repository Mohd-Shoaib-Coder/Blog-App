import React from "react";


const About=()=>{

    return (


        <body class=" text-gray-800">
       
        <div class="container mx-auto px-6 py-12 ">
          
          <header class="text-center mb-12">
            <h1 class="text-4xl font-extrabold text-blue-600 mb-4">About Us</h1>
            <p class="text-lg text-gray-600">Your go-to platform for all things tech!</p>
          </header>
      
          
          <section class="bg-white shadow-lg rounded-lg p-8 ">
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Welcome to Byte BreakDown</h2>
            <p class="text-gray-600 mb-6">
              Whether you’re a professional developer, a tech enthusiast, or someone just curious about the latest in technology, you’ve come to the right place. At <span class="font-semibold text-blue-500">Byte BreakDown</span>, we empower our community to explore, share, and learn about a wide range of technology-related topics.
            </p>
      
            <p class="text-gray-600 mb-6">
              From emerging technologies and industry trends to solving complex technical challenges, our platform offers diverse content that caters to everyone interested in tech. Our community of passionate writers and tech experts shares insights, tutorials, and experiences that help you stay ahead in the ever-evolving tech world.
            </p>
      
            
            <h3 class="text-xl font-semibold text-gray-700 mb-4">Here, you can:</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Discover new technologies and innovations shaping the future</li>
              <li>Troubleshoot technical problems with detailed solutions</li>
              <li>Dive into tech trends that matter most to you</li>
              <li>Engage with a global network of developers, engineers, and innovators</li>
            </ul>
          </section>
      
        
          <footer class="mt-12 text-center">
            <h4 class="text-lg font-semibold text-gray-700 mb-4">Join us in celebrating the spirit of technological innovation!</h4>
            <p class="text-gray-600 mb-6">Whether you're here to learn, share, or collaborate, <span class="font-semibold text-blue-500">Byte BreakDown</span> is where technology meets community.</p>
            <a href="/contact" class="inline-block bg-blue-600 text-white text-sm font-semibold py-3 px-6 rounded-lg  hover:bg-blue-700">
              Contact Us
            </a>
          </footer>
        </div>
      </body>
    )
}

export default About;