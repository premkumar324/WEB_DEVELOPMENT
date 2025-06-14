//render every time if put [] run only one time
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This runs on every render, because count is updated
    console.log(`Count is: ${count}`);
  },);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
/*
🔥 useEffect Hook - Quick Reference 🔥

useEffect is used to handle side effects in React (API calls, event listeners, timers, etc.).
It runs *after* the component renders.

✅ 1. Runs on every render (Not recommended for expensive operations)
------------------------------------------------
useEffect(() => {
  console.log("Runs after every render");
});

✅ 2. Runs only on first render (Component mount)
------------------------------------------------
useEffect(() => {
  console.log("Runs only once when the component mounts");
}, []);

✅ 3. Runs when a specific state/prop changes
------------------------------------------------
useEffect(() => {
  console.log("Runs only when 'count' changes");
}, [count]);

✅ 4. Runs on mount + cleanup on unmount (Useful for event listeners, timers)
------------------------------------------------
useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Component will unmount (Cleanup)");
  };
}, []);

*/
