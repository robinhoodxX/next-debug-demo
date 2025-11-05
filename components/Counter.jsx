// components/Counter.jsx  (FIXED)
"use client";                // <-- this line fixes hydration/runtime error
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Counter (fixed: 'use client')</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
