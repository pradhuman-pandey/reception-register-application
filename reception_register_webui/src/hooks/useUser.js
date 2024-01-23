import axios from "axios";
import { useEffect, useState } from "react";

import { API } from "@/constants";
import api from "@/services/axios";

export default function useUser() {
  const [user, setUser] = useState(Object);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const retrieveUser = async () => {
      setLoading(true);
      try {
        const response = await api.get(API.V1.ACCOUNT_DETAIL);
        const data = await response.data;
        setUser(data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request cancelled", err.message);
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    retrieveUser();

    return () => {
      source.cancel("Operation cancelled by the user.");
    };
  }, []);

  return [user, loading];
}
