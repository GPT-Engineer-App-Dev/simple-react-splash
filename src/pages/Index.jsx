import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Simple Counter App</h1>
        <p className="text-2xl mb-4">Count: {count}</p>
        <div className="space-x-4">
          <Button onClick={decrement}>Decrement</Button>
          <Button onClick={increment}>Increment</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
