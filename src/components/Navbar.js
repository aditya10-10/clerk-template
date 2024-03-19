import { Link } from "react-router-dom";

import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import ProtectedPage from "../ProtectedPage";

const divStyle = {
  borderRadius: "12px",
  background: "linear-gradient(90deg, #D13D70 2.82%, #D13D70 100%)",
  boxShadow: "0px 0px 13px 0px rgba(227, 79, 130, 0.50)",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full shadow bg-gradient-to-r from-[rgba(55,35,56,1)] to-[rgba(111,39,64,1)]">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <span className="px-2 py-1 font-bold text-3xl italic text-white">
                ShareEat
              </span>
              {/* {/<span className="py-1 font-semibold italic text-white">Auction-NFT</span>/} */}
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <Link to="/">Home</Link>
              </li>{" "}
              <li className="text-white hover:text-indigo-200">
                <Link to="/collections">Dashboard</Link>
              </li>
            </ul>
            <div className="mt-3 space-y-2 lg:hidden md:hidden">
              {/* <ConnectButton
                className="btn-design  inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                style={divStyle}
                accountStatus={{
                  smallScreen: "full",
                  largeScreen: "full",
                }}
                showBalance={{
                  smallScreen: true,
                  largeScreen: true,
                }}
              /> */}
            </div>
          </div>
        </div>

        <div className="hidden space-x-3 md:inline-block ">
          <button
            // to="javascript:void(0)
            onClick={() => {}}
            className="text-white w-full text-sm p-2 bg-[#e32970] hover:bg-[#bd255f] rounded-sm
 flex flex-row justify-center items-center shadow-md shadow-gray-700 "
          >
            List Food
          </button>
        </div>

        {!isSignedIn ? (
          <>
            <button className="text-white text-sm p-2 rounded-sm border ">
              <Link to="/sign-in">Sign In</Link>
            </button>
            <button className="text-white text-sm p-2 rounded-sm border ">
              <Link to="/sign-up">Sign Up</Link>
            </button>
          </>
        ) : (
          <div>
            <ProtectedPage />
          </div>
        )}

        <div className="hidden space-x-3 md:inline-block">
          {/* <ConnectButton
            className="btn-design"
           
            accountStatus={{
              smallScreen: "full",
              largeScreen: "full",
            }}
            showBalance={{
              smallScreen: true,
              largeScreen: true,
            }}
          /> */}
        </div>
      </div>
    </nav>
  );
};
export default Header;
