import React from "react";
import { getRepoInfo } from "api/api";
import { STATUS, useFetchData } from "hooks/useFetchData";
import { repo } from "constant/type";

const { idle, pending, resolved, rejected } = STATUS;

export default function Header() {
  const [status, error, repoInfo] = useFetchData<repo>(getRepoInfo());

  switch (status) {
    default:
    case idle:
      return null;
    case pending:
      return <div>Loading Repo information...</div>;
    case resolved:
      return <header>{repoInfo?.owner.login} / {repoInfo?.name}</header>;
    case rejected:
      return <div>{error?.message}</div>;
  }
}
