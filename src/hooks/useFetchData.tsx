import { error, issue, issueList } from "constant/type";
import { useState, useEffect } from "react";

export const STATUS = {
  idle: "idle",
  pending: "pending",
  resolved: "resolved",
  rejected: "rejected",
};

const { idle, pending, resolved, rejected } = STATUS;

export function useFetchData<DataType>(api: string) {
  const [status, setStatus] = useState<string>(idle);
  const [error, setError] = useState<error | null>(null);
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    setStatus(idle);
    setError(null);

    const fetchData = async (api: string) => {
      setStatus(pending);
      try {
        const response = await fetch(api);
        const json = await response.json();
        setStatus(resolved);
        setData(json);
        console.log(json);
      } catch (error) {
        setStatus(rejected);
        setError(error);
        console.log(error);
      }
    };

    fetchData(api);
  }, [api]);

  return [status, error, data] as [string, error | null, DataType | null];
}
