import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from "../../components";
import { Browser, LOCAL_STORAGE_KEY } from '../../constants';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (token) navigate(Browser.DASHBOARD);
  }, []);
  
  return <LoginForm/>;
}
