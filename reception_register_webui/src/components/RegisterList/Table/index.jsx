import { useContext } from "react";
import { ListRegisterContext } from "../../../contexts";

export default function Table() {
  const { registerList, loading } = useContext(ListRegisterContext);
  const columns = ["Name", "Phone", "Person to Meet","Company","purpose"];

  if (loading) return <p>Loading...</p>;
  return (
    <div class="relative overflow-x-auto " style={{padding: '3%'}}>
    <table class="table_component">
      <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-10 font-bold">
        <tr style={{ border: "1px solid black"}} className="p-5">
          {columns.map((column) => {
            return <th key={column} style={{ border: "1px solid black",textAlign:"center"}}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {registerList.length === 0 ? (
          <tr style={{border:'1px solid black'}}>
            <td colSpan={columns.length} style={{textAlign:"center"}}>No Content</td>
          </tr>
        ) : (
          registerList.map((entry) => {
            return (
              <tr key={entry._id} style={{border:'1px solid black'}}>
                <td className="p-2" style={{ border: "1px solid black",textAlign:'center'}}>{entry.name}</td>
                <td style={{ border: "1px solid black",textAlign:'center'}}>{entry.mobile}</td>
                <td style={{ border: "1px solid black",textAlign:'center'}}>{entry.personToMeet}</td>
                <td style={{ border: "1px solid black",textAlign:'center'}}>{entry.company}</td>
                <td style={{ border: "1px solid black",textAlign:'center'}}>{entry.purpose}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
    </div>
  );
}
