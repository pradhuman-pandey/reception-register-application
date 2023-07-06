import { useEffect, useState } from "react";

import { API } from "../constants";
import axios from "../services/axios";

export default function useRetrieveRegister(id) {
  const [register, setRegister] = useState(Object);
  const [loading, setLoading] = useState(false);

  const retrieveRegister = async () => {
    const response = await axios.get(`${API.V1.REGISTER}/${id}`);
    const data = await response.data;
    setRegister(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    retrieveRegister();
  }, []);

  return [register, loading];
}
