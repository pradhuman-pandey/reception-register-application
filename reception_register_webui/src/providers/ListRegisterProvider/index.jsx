import PropTypes from "prop-types";

import { ListRegisterContext } from "../../contexts";
import { useListRegister } from "../../hooks";

export default function ListRegisterProvider(props) {
  const [registerList, loading, filters, setFilters] = useListRegister();

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
