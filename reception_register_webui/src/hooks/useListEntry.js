import axios from "axios";
import { useEffect, useState } from "react";

import { API } from "@/constants";
import api from "@/services/axios";

export default function useListRegister() {
  const [entryList, setEntryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const source = axios.CancelToken.source();

    const listEntry = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams(filters);
        const url = `${API.V1.REGISTER_ENTRY}?${queryParams.toString()}`;
        const options = { cancelToken: source.token };
        const response = await api.get(url, options);
        const data = await response.data;
        setEntryList(data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request cancelled", err.message);
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    listEntry();

    return () => {
      source.cancel("Operation cancelled by the user.");
    };
  }, [filters]);

  return [entryList, loading, filters, setFilters];
}
