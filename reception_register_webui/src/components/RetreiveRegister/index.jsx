import { useRetrieveRegister } from "../../hooks";
export default function RetreiveRegister(props){
  console.log("hello",props.userId);
  const [register, loading] = useRetrieveRegister(props.userId);
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("aman",register);

  return <></>;
};
