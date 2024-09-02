import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; 


const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl mb-4">Counter: {count}</h1>
      <div className="space-x-2">
        <button onClick={increment} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
          Increment
        </button>
        <button onClick={decrement} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
          Decrement
        </button>
        <button onClick={reset} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">
          Reset
        </button>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
