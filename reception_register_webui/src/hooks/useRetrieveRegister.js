import { useEffect, useState } from "react";

import { API } from "../constants";
import axios from "../services/axios";

export default function useRetrieveRegister(id) {
  const [register, setRegister] = useState(Object);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveRegister = async () => {
      setLoading(true);
      const response = await axios.get(`${API.V1.REGISTER}/${id}`);
      const data = await response.data;
      setRegister(data);
      setLoading(false);
    };
    retrieveRegister();
  }, [id]);

  return [register, loading];
}
