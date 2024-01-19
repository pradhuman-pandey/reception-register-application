import PropTypes from "prop-types";

import { ListRegisterContext } from "../../contexts";
import { useListEntry } from "../../hooks";

export default function ListRegisterProvider(props) {
  const [registerList, loading, filters, setFilters] = useListEntry();

  return (
    <ListRegisterContext.Provider
      value={{ registerList, loading, filters, setFilters }}
    >
      {props.children}
    </ListRegisterContext.Provider>
  );
}

ListRegisterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
