import { useState, useEffect } from "react";

export const STATUS = {
  idle: "idle",
  pending: "pending",
  resolved: "resolved",
  rejected: "rejected",
};

const { idle, pending, resolved, rejected } = STATUS;

export function useFetchData(api) {
  const [status, setStatus] = useState(idle);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setStatus(idle);
    setError(null);

    const fetchData = async () => {
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

  return [status, error, data];
}
