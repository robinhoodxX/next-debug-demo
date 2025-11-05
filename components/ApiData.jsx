// components/ApiData.jsx  (FIXED)
"use client";
import { useEffect, useState } from "react";

export default function ApiData() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (e) {
        if (e.name !== "AbortError") setErr(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (err) return <div>API Error: {String(err)}</div>;

  return (
    <div>
      <h3>API Data (fixed)</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
