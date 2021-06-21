import React from "react";

import { useFetchData, STATUS } from "hooks/useFetchData";
import { discover } from "api/api";
import Lists from "containers/Lists";
import { issueList } from "constant/type";

const { idle, pending, resolved, rejected } = STATUS;

export default function MainPage() {
  const [status, error, issueList] = useFetchData<issueList>(discover(1));

  switch (status) {
    default:
    case idle:
      return null;
    case pending:
      return <div>waiting...</div>;
    case resolved:
      return <Lists issueList={issueList} />;
    case rejected:
      return <div>{error?.message}</div>;
  }
}
