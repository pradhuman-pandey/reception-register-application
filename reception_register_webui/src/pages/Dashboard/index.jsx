import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar, RegisterList } from "../../components";
import { Browser, LOCAL_STORAGE_KEY } from "../../constants";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!token) navigate(Browser.ROOT);
  }, []);

  return (
    <>
      <Navbar />
      <RegisterList />
    </>
  );
}
