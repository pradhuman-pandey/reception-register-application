import { useEffect, useState } from "react";

import { API } from "../constants";
import axios from "../services/axios";

export default function useListRegister() {
  const [registerList, setRegisterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(Object);

  const getListRegister = async (e) => {
    let url = API.V1.REGISTER;
    if (filters) {
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach((pair) => {
        queryParams.append(pair[0], pair[1]);
      });
      url += `?${queryParams.toString()}`;
    }
    const response = await axios.get(url);
    console.log(url);
    console.log(response.data);
    const data = await response.data;
    console.log(data);
    setRegisterList(data);
    setLoading(false);
  };

  useEffect(() => {
    getListRegister();
  }, [filters]);

  return [registerList, loading, filters, setFilters];
}
