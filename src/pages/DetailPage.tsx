import React from "react";

import { useFetchData, STATUS } from "hooks/useFetchData";
import { getDetail } from "api/api";
import { useRouteMatch } from "react-router";
import IssueDetail from "containers/IssueDetail";
import { issue } from "constant/type";

const { idle, pending, resolved, rejected } = STATUS;

export default function DetailPage() {
  const match = useRouteMatch();
  const { issueNumber } = match.params as { issueNumber: number };

  const [status, error, issue] = useFetchData<issue>(getDetail(issueNumber));

  switch (status) {
    default:
    case idle:
      return null;
    case pending:
      return <div>waiting...</div>;
    case resolved:
      return <IssueDetail issue={issue} />;
    case rejected:
      return <div>{error?.message}</div>;
  }
}
