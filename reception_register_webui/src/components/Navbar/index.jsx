import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { API, Browser } from "../../constants";
import NewEntry from "../NewEntry";
import { useUser } from "../../hooks";
import axios from "../../services/axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, loading] = useUser();
  const [open, setOpen] = useState(false);
  const [logout, setLogout] = useState(false);
  const [openmodal,setOpenModal] = useState(false)
  // const [dropdown,setDropDown] = useState(false);
  // const handleClose = () => setOpenModal(false);
  const dropdowntoggle = () => {
    setLogout((logout)=>!logout);
  };

  const handleOpen = () =>{
    setOpenModal(!openmodal);
  }

  const toggleOpen = () => {
    setOpen(!open);
  };

  const performLogout = async (e) => {
    e.preventDefault();
    console.log("hello")
    await axios.delete(API.V1.ACCOUNT_LOGOUT);
    localStorage.clear();
    setTimeout(()=>{
      navigate(Browser.ROOT);
    },10000)
    window.location.reload()
  };

  return (
    <div className="w-full text-white-700 dark-mode:text-white-200 dark-mode:bg-cyan-600 bg-cyan-600">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <a
            href="#"
            className="text-white text-xl  font-bold tracking-widest text-white-700 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Reception Register
          </a>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={toggleOpen}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                style={!open ? {} : { display: "none" }}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <span
                style={open ? {} : { display: "none" }}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></span>
            </svg>
          </button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 ${
            open ? "flex" : "hidden"
          } md:flex md:justify-end md:flex-row`}
        >
          <Link
            className="text-white px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            to={Browser.DASHBOARD}
          >
            Dashboard
          </Link>
          <div className="New_register">
          <button
            onClick={handleOpen}
            className="text-white px-4 py-2 mt-2 text-lg font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            New Register
          </button>

           {openmodal && <div><NewEntry openmodal={openmodal}/></div>}
           </div>
          <div
            className="relative"
          >
            <button
              onClick={dropdowntoggle}
              className="text-white flex flex-row items-center w-full px-4 py-2 mt-2 text-lg font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>
                {user.firstName} {user.lastName}
              </span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {logout && (
              //  <section className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                <ul>
                  <li className=" px-1 py-2 text-center right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                    <button onClick={performLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              // </section>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
