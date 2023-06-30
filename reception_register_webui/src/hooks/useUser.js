import { useEffect, useState } from "react";

import { API_V1 } from "../constants";
import axios from "../services/axios";

export default function useUser() {
  const [user, setUser] = useState(Object);
  const [loading, setLoading] = useState(false);

  const retrieveUser = async () => {
    const response = await axios.get(API_V1.ACCOUNT_DETAIL);
    const data = await response.data;
    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    retrieveUser();
  }, []);

  return [user, loading];
}
