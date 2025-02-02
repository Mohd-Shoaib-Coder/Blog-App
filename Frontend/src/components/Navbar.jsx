import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserContext } from "../Context/userContext";


const Navbar = () => {




    const { setUserInfo, userInfo } = useContext(UserContext);
    const [popup, setPopup] = useState(false);

    useEffect(() => {

        fetch("https://blog-app-x01e.onrender.com/profile", {

            credentials: "include",
        }).then((response) => {
            response.json().then((x) => {

                setUserInfo(x)

            })


        })






    }, [])

    // console.log(userInfo)





    const logout = () => {


        fetch("http://localhost:4000/logout", {

            credentials: "include",
            method: "POST",
        });
        setUserInfo(null)


    }



    const PopUp = () => {

        setPopup(!popup);
    }


    const username = userInfo?.username;
    const userId = userInfo?.id

    // console.log(userId)

    return (

        <>
            <div className=" w-full">

                <div className="flex justify-center mt-3 mx-4   ">

                    <div className=" border-2 border-gray-200 flex flex-row items-center space-x-72 rounded-xl py-2 bg-yellow-300  ">

                        <div className="flex flex-row px-5">

                            <h1 className="bg-black text-white font-semibold h-9 w-9 rounded-lg flex justify-center items-center m-1 ">BB</h1>
                            <div />
                            <div className="flex justify-center items-center text-xl">
                                <h1>ByteBreakDown</h1>

                            </div>

                        </div>







                        <div className="  flex-row text-sm space-x-7  hidden xl:block">

                            <Link className="hover:text-violet-500" to="/home">Home</Link>
                            <Link className="hover:text-violet-500" to="/about">About Us</Link>
                        </div>



                        {username && (


                            <>
                                <div className="  flex flex-row space-x-7 text-lg px-6 relative ">
                                   
                                    <p className="justify-center items-center whitespace-nowrap text-sm  hover:cursor-pointer   hidden lg:flex">Hii,{userInfo.username}  </p>
                                    
                                    <a
                                        onClick={PopUp}
                                        className="bg-black text-white text-md flex justify-center px-4 py-4 items-center h-9 max-w-20  rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black hover:cursor-pointer"
                                    >
                                        Create
                                    </a>




                                    {
                                        popup ? (
                                          
                                            <div className="bg-white border-2 border-gray-200 rounded-md flex justify-center items-center flex-col h-28 w-40 absolute top-[50px] right-[0px] ">
                                                <Link to="/Create" className="font-normal text-sm p-2 hover:bg-gray-200 hover:border-none hover:rounded-lg">
                                                    Create post
                                                </Link>
                                                <Link to={`/dashboard/${userId}`} className="font-normal text-sm p-2 hover:bg-gray-200 hover:border-none hover:rounded-lg  ">
                                                    Dashboard
                                                </Link>
                                            </div>
                                            
                                        ) : null
                                    }




                                    <a onClick={logout} className="bg-black text-white flex justify-center items-center h-9 max-w-20 p-3 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black hover:cursor-pointer ">Logout</a>

                                </div>

                            </>
                        )}


                        {!username && (

                            <div className="  flex flex-row space-x-7 text-lg px-6">

                                <Link to="/login" className="bg-black text-white flex justify-center items-center h-9 max-w-20 p-3 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black ">Login</Link>

                                <Link to="/Signup" className="bg-black text-white flex justify-center items-center h-9 max-w-20 p-3 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black ">SignUp</Link>
                            </div>





                        )}



                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar;





