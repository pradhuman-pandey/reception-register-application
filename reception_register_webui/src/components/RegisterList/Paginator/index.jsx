import { useContext, useEffect, useState } from "react";

import { ListRegisterContext } from "../../../contexts";

export default function Paginator() {
  const { registerList, loading, filters, setFilters } =
    useContext(ListRegisterContext);
  const [today, setToday] = useState(0);

  useEffect(() => {
    setFilters({ date: getDate() });
  }, [today]);

  const getDate = () => {
    let date = new Date();
    date = new Date(date.setDate(date.getDate() + today));
    const dateString = date.toISOString().split("T")[0];
    return dateString;
  };

  const onPageChange = (step) => (e) => {
    e.preventDefault();
    setToday((current) => current + step);
  };

  return (
    <div className="flex gap-1 justify-normal p-3 px-3">
      <span className="bg-slate-100">
        <button type="button" className=" p-0 px-4" onClick={onPageChange(-1)}>
          Previous
        </button>
        <span className=" py-1 px-2 bg-cyan-600 text-white">{getDate()}</span>
        <button
          type="button"
          className="font-mono p-0 px-4"
          onClick={onPageChange(1)}
        >
          Next
        </button>
      </span>
    </div>
  );
}
