import axios from "axios";
import { useEffect, useState } from "react";

import { API } from "../constants";
import api from "../services/axios";

export default function useRetrieveEntry(id) {
  const [entry, setEntry] = useState(Object);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const retrieveEntry = async () => {
      setLoading(true);
      try {
        const url = `${API.V1.REGISTER_ENTRY}/${id}`;
        const options = { cancelToken: source.token };
        const response = await api.get(url, options);
        const data = await response.data;
        setEntry(data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request cancelled", err.message);
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    retrieveEntry();

    return () => {
      source.cancel("Operation cancelled by the user.");
    };
  }, [id]);

  return [entry, loading];
}
