import { useContext, useState } from "react";

import { ListRegisterContext } from "../../../contexts";
import RetrieveRegister from "../../RetrieveRegister";

export default function Table() {
  const { registerList, loading } = useContext(ListRegisterContext);
  const columns = [
    "Name",
    "Phone",
    "Person to Meet",
    "Company",
    "Purpose",
  ];
  const [targetUserId, setTargetUserId] = useState(false);
  const [userId, setUserId] = useState(null);

  const targetUser = (index) => {
    setUserId(index);
    setTargetUserId((targetUserId) => !targetUserId);
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div style={{ padding: "5px" }}>
      <div
        className="relative overflow-x-auto"
        style={{ padding: "6%", maxHeight: "400px", overflowY: "scroll" }}
      >
        <table className="table_component  bg-white border border-gray-300">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-10 font-bold">
            <tr className="bg-green-500 text-white p-5">
              {columns.map((column) => {
                return (
                  <th
                    className="py-4 px-6"
                    key={column}
                    style={{ textAlign: "center" }}
                  >
                    {column}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {registerList.length === 0 ? (
              <tr style={{ border: "1px solid black" }}>
                <td colSpan={columns.length} style={{ textAlign: "center" }}>
                  No Content
                </td>
              </tr>
            ) : (
              registerList.map((entry, index) => {
                return (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
                  >
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      {entry.name}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      {entry.mobile}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      {entry.personToMeet}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      {entry.company}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300 text-center">
                      {entry.purpose}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {targetUserId && <RetrieveRegister userId={userId} />}
    </div>
  );
}
