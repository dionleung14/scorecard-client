import React, { useState } from "react";
export default function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(5)}>Click me</button>
    </div>
  );
}
