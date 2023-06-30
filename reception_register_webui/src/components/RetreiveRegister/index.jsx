import { useRetrieveRegister } from "../../hooks";
export default function RetreiveRegister(){
  const [register, loading] = useRetrieveRegister(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(register);

  return <></>;
};
