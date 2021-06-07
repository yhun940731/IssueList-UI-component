import React from "react";

import { useFetchData, STATUS } from "hooks/useFetchData";
import { discover } from "api/api";
import Lists from "containers/Lists";

const { idle, pending, resolved, rejected } = STATUS;

export default function MainPage() {
  const [status, error, json] = useFetchData(discover(1));

  switch (status) {
    default:
    case idle:
      return null;
    case pending:
      return <div>waiting...</div>;
    case resolved:
      return <Lists data={json} />;
    case rejected:
      return <div>{error.message}</div>;
  }
}
