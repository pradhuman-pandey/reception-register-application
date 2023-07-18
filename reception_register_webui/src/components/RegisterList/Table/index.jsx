import { useContext } from "react";
import { useState } from "react";
import { ListRegisterContext } from "../../../contexts";
import RetreiveRegister from "../../RetreiveRegister";
export default function Table() {
  const { registerList, loading } = useContext(ListRegisterContext);
  const columns = ["Name", "Phone", "Person to Meet", "Company", "Purpose", "Activity"];
  const [targetUserId, setTargetUserId] = useState(false);
  const [userId,setUserId] = useState(null);
  const targetUser = (index) => {
    console.log('hello',index);
    setUserId(index);
    setTargetUserId((targetUserId)=>!targetUserId);
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div style={{ padding: "5px" }}>
      <div
        class="relative overflow-x-auto"
        style={{ padding: "6%", maxHeight: "400px", overflowY: "scroll" }}
      >
        <table className="table_component  bg-white border border-gray-300" >
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-10 font-bold">
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
              registerList.map((entry,index) => {
                return (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                    <td
                      className="py-2 px-4 border-b border-gray-300 text-center"
                      // style={{ border: "1px solid black", textAlign: "center" }}
                    >
                      {entry.name}
                    </td>
                    <td
                     className="py-2 px-4 border-b border-gray-300 text-center"
                      // style={{ border: "1px solid black", textAlign: "center" }}
                    >
                      {entry.mobile}
                    </td>
                    <td
                     className="py-2 px-4 border-b border-gray-300 text-center"
                      // style={{ border: "1px solid black", textAlign: "center" }}
                    >
                      {entry.personToMeet}
                    </td>
                    <td
                      // style={{ border: "1px solid black", textAlign: "center" }}
                      className="py-2 px-4 border-b border-gray-300 text-center"
                    >
                      {entry.company}
                    </td>
                    <td
                      // style={{ border: "1px solid black", textAlign: "center" }}
                      className="py-2 px-4 border-b border-gray-300 text-center"
                    >
                      {entry.purpose}
                    </td>
                    <td className="flex gap-2 justify-center items-center py-2 px-4 border-b border-gray-300">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                          color="red"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>
                      <button onClick={()=>targetUser(entry._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                          color="#FFD700"
                        >
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                        </svg>
                      </button>
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {targetUserId && <RetreiveRegister userId={userId}/> }
    </div>
  );
}
