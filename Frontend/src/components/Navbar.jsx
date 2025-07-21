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
    fetch("https://blog-app-ve13.onrender.com/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    setPopup(false);
    setMobileMenuOpen(false);
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
          <div className="bg-black text-white font-semibold h-9 w-9 rounded-lg flex justify-center items-center">
            BB
          </div>
          <h1 className="text-lg font-semibold">ByteBreakDown</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-sm">
          <Link to="/home" className="hover:text-violet-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-violet-600">
            About Us
          </Link>

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
                  <Link
                    to="/Create"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Create Post
                  </Link>
                  <Link
                    to={`/dashboard/${userId}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
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
              <Link
                to="/login"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black"
              >
                Login
              </Link>
              <Link
                to="/Signup"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black"
              >
                SignUp
              </Link>
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
        <div className="lg:hidden bg-white border mt-2 rounded-lg shadow px-4 py-4 text-sm space-y-3 flex flex-col items-center">
          <Link to="/home" className="hover:text-violet-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-violet-600">
            About Us
          </Link>

          {username ? (
            <>
              <p className="text-gray-800 font-medium">Hi, {username}</p>

              <Link
                to="/Create"
                className="bg-gray-100 text-center px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Create Post
              </Link>

              <Link
                to={`/dashboard/${userId}`}
                className="bg-gray-100 text-center px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:border"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-black text-white px-4 py-2 rounded-md text-center hover:bg-white hover:text-black hover:border"
              >
                Login
              </Link>
              <Link
                to="/Signup"
                className="bg-black text-white px-4 py-2 rounded-md text-center hover:bg-white hover:text-black hover:border"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
