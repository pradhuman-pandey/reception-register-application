import PropTypes from "prop-types";
import { useRef } from "react";
import { Box, Modal } from "@mui/material";

import axios from "../../services/axios";

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

export default function NewEntry({ openModal }) {
  const nameRef = useRef(!null);
  const companyRef = useRef(!null);
  const personToMeetRef = useRef(!null);
  const mobileRef = useRef(!null);
  const purposeRef = useRef(!null);
  const signRef = useRef(!null);

  var defaultValue = new Date().toISOString().split("T")[0];
  let date = new Date();
  var currentTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      company: companyRef.current.value,
      personToMeet: personToMeetRef.current.value,
      mobile: mobileRef.current.value,
      purpose: purposeRef.current.value,
      in: new Date().toISOString(),
      sign: signRef.current.value,
    };
    const response = await axios.post(
      `http://127.0.0.1:8000/api/v1/register/`,
      payload
    );
    if (response.status !== 201) return;
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  return (
    <>
      <Modal
        open={openModal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="bg-white shadow-md rounded px-2 pt-2 pb-2 mb-2">
            <div className="grid grid-flow-col gap-4">
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateRequired"
                  type="date"
                  name="dateRequired"
                  defaultValue={defaultValue}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  ref={nameRef}
                />
              </div>
            </div>
            <div className="grid grid-flow-col gap-4">
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                  id="company"
                  type="text"
                  placeholder="Company"
                  ref={companyRef}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="persontomeet"
                >
                  Person To Meet
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                  id="persontomeet"
                  type="text"
                  placeholder="Person Name"
                  ref={personToMeetRef}
                />
              </div>
            </div>
            <div className="grid grid-flow-col gap-4">
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="mobile"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                  id="mobile"
                  type="number"
                  placeholder="number"
                  ref={mobileRef}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="purpose"
                >
                  Purpose
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                  id="purpose"
                  type="text"
                  placeholder="purpose"
                  ref={purposeRef}
                />
              </div>
            </div>
            <div className="grid grid-flow-col gap-4">
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  In
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateRequired"
                  type="time"
                  name="dateRequired"
                  defaultValue={currentTime}
                />
              </div>
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="purpose"
                >
                  Sign
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                  id="purpose"
                  type="text"
                  placeholder="purpose"
                  ref={signRef}
                />
              </div>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

NewEntry.propTypes = {
  openModal: PropTypes.bool,
};
