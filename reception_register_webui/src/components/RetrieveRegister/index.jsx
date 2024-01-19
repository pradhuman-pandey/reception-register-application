import PropTypes from "prop-types";

import { useRetrieveEntry } from "../../hooks";

export default function RetrieveRegister(props) {
  const [register, loading] = useRetrieveEntry(props.userId);

  if (loading) return <div>Loading...</div>;
  return <>{register._id}</>;
}

RetrieveRegister.propTypes = {
  userId: PropTypes.number,
};
