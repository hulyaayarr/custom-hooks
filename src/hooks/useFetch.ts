import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return [data, isLoading, error] as const;
}
