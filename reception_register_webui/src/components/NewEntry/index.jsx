import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import { API } from "../../constants";
import { Browser,LOCAL_STORAGE_KEY } from "../../constants";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "10px",
};

export default function NewEntry({ openmodal }) {
  const navigate = useNavigate();
  const nameRef = useRef(!null);
  const companyRef = useRef(!null);
  const persontomeetRef = useRef(!null);
  const mobileRef = useRef(!null);
  const purposeRef = useRef(!null);
  const dateRef = useRef(!null);
  const signRef = useRef(!null);

  var defaultValue = new Date().toISOString().split("T")[0];
  let date = new Date();
  var currentTime =  date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem(LOCAL_STORAGE_KEY) 

    const headers = {
      Authorization: `Token ${token}`,
      'Content-Type': 'application/json',
    };
    const payload = {
      name: nameRef.current.value,
      company: companyRef.current.value,
      personToMeet: persontomeetRef.current.value,
      mobile: mobileRef.current.value,
      purpose: purposeRef.current.value,
      in: new Date().toISOString(),
      sign: signRef.current.value
    } 
    const response = await axios.post(`http://127.0.0.1:8000/api/v1/register/`, payload,{headers});
    if (response.status !== 201) return;
    const data = await response.data;
    console.log(data);
    setTimeout(()=>{
      window.location.reload();
    },5000)
  };

  return (
    <>
      <Modal
        open={openmodal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form class="bg-white shadow-md rounded px-2 pt-2 pb-2 mb-2">
            <div className="grid grid-flow-col gap-4">
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Date
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateRequired"
                type="date"
                name="dateRequired"
                defaultValue={defaultValue}
              />
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                ref={nameRef}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            </div>
            <div className="grid grid-flow-col gap-4">
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="company"
              >
                Company
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Company"
                ref={companyRef}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="persontomeet"
              >
                Person To Meet
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="persontomeet"
                type="text"
                placeholder="Person Name"
                ref={persontomeetRef}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            </div>
            <div className="grid grid-flow-col gap-4">
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="mobile"
              >
                Phone
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                type="number"
                placeholder="number"
                ref={mobileRef}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="purpose"
              >
                Purpose
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="purpose"
                type="text"
                placeholder="purpose"
                ref={purposeRef}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            </div>
            <div className="grid grid-flow-col gap-4">
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                In
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateRequired"
                type="time"
                name="dateRequired"
                Value={currentTime}
              />
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="purpose"
              >
                Sign
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="purpose"
                type="text"
                placeholder="purpose"
                ref={signRef}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            </div>
            <div >
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
