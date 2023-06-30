import { useEffect } from "react";
import { useListRegister } from "../../hooks";

export default function RegisterList() {
  const [registerList, loading, filters, setFilters] = useListRegister();

  const columns = ["Name", "Phone", "Person to Meet"];

  useEffect(() => {
    setFilters({ date: new Date().toISOString().split("T")[0] });
  }, [setFilters]);

  if (loading) return <p>Loading...</p>;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {registerList.length === 0 ? (
          <tr>
            <td colSpan={columns.length}>No Content</td>
          </tr>
        ) : (
          registerList.map((entry) => {
            return (
              <tr key={entry._id}>
                <td>{entry.name}</td>
                <td>{entry.phone}</td>
                <td>{entry.personToMeet}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}
