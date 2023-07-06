import Paginator from "./Paginator";
import Table from "./Table";

import { ListRegisterProvider } from "../../providers";

export default function RegisterList() {
  return (
    <ListRegisterProvider>
      <Table />
      <Paginator />
    </ListRegisterProvider>
  );
}
