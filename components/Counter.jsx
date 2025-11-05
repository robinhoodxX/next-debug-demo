// components/Counter.jsx  (BUGGY - missing "use client")
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Bug: This works, but in app-router this file must be a client component.
  // Without "use client" Next will throw a hydration error when used in a page.
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Counter (buggy - missing use client)</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
