'use client';

import { useState, useCallback } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => setCount((state) => state + 1), []);
  const decrease = useCallback(() => setCount((state) => state - 1), []);

  return {
    count,
    increase,
    decrease
  };
};

export const Counter = () => {
  const { count, decrease, increase } = useCounter();

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <p>{count}</p>
    </div>
  );
};
