import { useNavigate } from "react-router-dom";
import { API } from "../../constants";
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
  // const handleClose = () => setOpenModal(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    dateRequired: Date.now(),
    name: "",
    company: "",
    persontomeet: "",
    mobile: "",
    purpose: "",
  });

  var someDate = new Date();
  var numberOfDaysToAdd = 0;
  var date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  var defaultValue = new Date(date).toISOString().split("T")[0];

  const handleChange = (e) => {
    e.preventDefault;
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API.V1.REGISTER, formData);
      if (response.status !== 201) {
        if (response.status === 400) {
          alert("Please fill the form with all the required fields.");
          return;
        }
        alert("Something went wrong!");
        return;
      }
      navigate("/dashboard");
    } catch (error) {
      setError("Something went wrong!");
    }
    console.log(formData);
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
                onChange={handleChange}
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
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="company"
              >
                Company
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Company"
                onChange={handleChange}
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
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="persontomeet"
                type="text"
                placeholder="Person Name"
                onChange={handleChange}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div class="mb-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="mobile"
              >
                Phone
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                type="number"
                placeholder="number"
                onChange={handleChange}
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
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="purpose"
                type="text"
                placeholder="purpose"
                onChange={handleChange}
              />
              {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div class="flex items-center justify-between">
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
