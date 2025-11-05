// components/ApiData.jsx  (BUGGY)
import { useEffect, useState } from "react";

export default function ApiData() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // Bug: forgetting to await fetch.json() demonstration or not handling errors.
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(e => setErr(e));
  }, []);

  if (err) return <div>API Error</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h3>API Data (buggy)</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
