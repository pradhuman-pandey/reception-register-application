import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterList } from "../../components";
import { Browser, LOCAL_STORAGE_KEY } from "../../constants";
import { useUser } from "../../hooks";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, loading] = useUser();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!token) navigate(Browser.ROOT);
  }, []);

  if (loading) return <>Loading...</>;
  return <>{user.email} <RegisterList/></>;
}
