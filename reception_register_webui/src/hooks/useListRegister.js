import { useEffect, useState } from "react";

import { API_V1 } from "../constants";
import axios from "../services/axios";

export default function useListRegister() {
  const [registerList, setRegisterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(Object);
  // In filters we can also add filters for pagination etc
  // refer repo-->https://github.com/amoghmadan/django-next-todo-application/blob/main/tracker_webui/src/hooks/useListItem.ts
  const getListRegister = async () => {
    let url = API_V1.REGISTER;
    if (filters) {
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach((pair) => {
        queryParams.append(pair[0], pair[1]);
      });
      url += `?${queryParams.toString()}`;
    }
    const response = await axios.get(url);
    const data = await response.data;
    setRegisterList(data);
    setLoading(false);
  };

  useEffect(() => {
    getListRegister();
  }, [filters]);

  return [registerList, loading, filters, setFilters];
}
