// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { UserContext } from "../Context/userContext";


// const Navbar = () => {




//     const { setUserInfo, userInfo } = useContext(UserContext);
//     const [popup, setPopup] = useState(false);

//     useEffect(() => {

//         fetch("https://blog-app-ve13.onrender.com/profile", {

//             credentials: "include",
//         }).then((response) => {
//             response.json().then((x) => {

//                 setUserInfo(x)

//             })


//         })






//     }, [])

//     // console.log(userInfo)





//     const logout = () => {


//         fetch("http://localhost:4000/logout", {

//             credentials: "include",
//             method: "POST",
//         });
//         setUserInfo(null)


//     }



//     const PopUp = () => {

//         setPopup(!popup);
//     }


//     const username = userInfo?.username;
//     const userId = userInfo?.id

//     // console.log(userId)

//     return (

//         <>
//             <div className=" w-full">

//                 <div className="flex justify-center mt-3 mx-4   ">

//                     <div className=" border-2 border-gray-200 flex flex-row items-center space-x-72 rounded-xl py-2 bg-yellow-300  ">

//                         <div className="flex flex-row px-5">

//                             <h1 className="bg-black text-white font-semibold h-9 w-9 rounded-lg flex justify-center items-center m-1 ">BB</h1>
//                             <div />
//                             <div className="flex justify-center items-center text-xl">
//                                 <h1>ByteBreakDown</h1>

//                             </div>

//                         </div>







//                         <div className="  flex-row text-sm space-x-7  hidden xl:block">

//                             <Link className="hover:text-violet-500" to="/home">Home</Link>
//                             <Link className="hover:text-violet-500" to="/about">About Us</Link>
//                         </div>



//                         {username && (


//                             <>
//                                 <div className="  flex flex-row space-x-7 text-lg px-6 relative ">
                                   
//                                     <p className="justify-center items-center whitespace-nowrap text-sm  hover:cursor-pointer   hidden lg:flex">Hii,{userInfo.username}  </p>
                                    
//                                     <a
//                                         onClick={PopUp}
//                                         className="bg-black text-white text-md flex justify-center px-4 py-4 items-center h-9 max-w-20  rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black hover:cursor-pointer"
//                                     >
//                                         Create
//                                     </a>




//                                     {
//                                         popup ? (
                                          
//                                             <div className="bg-white border-2 border-gray-200 rounded-md flex justify-center items-center flex-col h-28 w-40 absolute top-[50px] right-[0px] ">
//                                                 <Link to="/Create" className="font-normal text-sm p-2 hover:bg-gray-200 hover:border-none hover:rounded-lg">
//                                                     Create post
//                                                 </Link>
//                                                 <Link to={`/dashboard/${userId}`} className="font-normal text-sm p-2 hover:bg-gray-200 hover:border-none hover:rounded-lg  ">
//                                                     Dashboard
//                                                 </Link>
//                                             </div>
                                            
//                                         ) : null
//                                     }




//                                     <a onClick={logout} className="bg-black text-white flex justify-center items-center h-9 max-w-20 p-3 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black hover:cursor-pointer ">Logout</a>

//                                 </div>

//                             </>
//                         )}


//                         {!username && (

//                             <div className="  flex flex-row space-x-7 text-lg px-6">

//                                 <Link to="/login" className="bg-black text-white flex justify-center items-center h-9 max-w-20 p-3 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black ">Login</Link>

//                                 <Link to="/Signup" className="bg-black text-white flex justify-center items-center h-9 max-w-20 p-3 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black ">SignUp</Link>
//                             </div>





//                         )}



//                     </div>

//                 </div>

//             </div>
//         </>
//     )
// }

// export default Navbar;














import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [popup, setPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch("https://blog-app-ve13.onrender.com/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((x) => setUserInfo(x));
  }, []);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const PopUp = () => setPopup(!popup);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const username = userInfo?.username;
  const userId = userInfo?.id;

  return (
    <div className="w-full px-4">
      <div className="flex justify-between items-center mt-4 bg-yellow-300 px-4 py-3 rounded-xl shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-black text-white font-semibold h-9 w-9 rounded-lg flex justify-center items-center">BB</div>
          <h1 className="text-lg font-semibold">ByteBreakDown</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-sm">
          <Link to="/home" className="hover:text-violet-600">Home</Link>
          <Link to="/about" className="hover:text-violet-600">About Us</Link>

          {username ? (
            <div className="relative flex items-center gap-5">
              <p className="whitespace-nowrap text-sm">Hi, {username}</p>

              <button
                onClick={PopUp}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black"
              >
                Create
              </button>

              {popup && (
                <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-lg shadow-md w-40 z-10">
                  <Link to="/Create" className="block px-4 py-2 hover:bg-gray-100">Create Post</Link>
                  <Link to={`/dashboard/${userId}`} className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                </div>
              )}

              <button
                onClick={logout}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black">Login</Link>
              <Link to="/Signup" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black">SignUp</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border mt-2 rounded-lg shadow px-4 py-3 text-sm space-y-2">
          <Link to="/home" className="block hover:text-violet-600">Home</Link>
          <Link to="/about" className="block hover:text-violet-600">About Us</Link>

          {username ? (
            <>
              <p className="text-gray-800">Hi, {username}</p>
              <Link to="/Create" className="block hover:bg-gray-100 rounded-md px-2 py-1">Create Post</Link>
              <Link to={`/dashboard/${userId}`} className="block hover:bg-gray-100 rounded-md px-2 py-1">Dashboard</Link>
              <button onClick={logout} className="block bg-black text-white px-4 py-1 rounded hover:bg-white hover:text-black hover:border">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block bg-black text-white px-4 py-1 rounded hover:bg-white hover:text-black hover:border">Login</Link>
              <Link to="/Signup" className="block bg-black text-white px-4 py-1 rounded hover:bg-white hover:text-black hover:border">Signup</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;





