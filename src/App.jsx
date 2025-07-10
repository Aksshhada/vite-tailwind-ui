import { useState } from 'react';
import { Button } from "./components/ui/button";
import './index.css';

function App() {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[300px]">
        <h1 className="text-2xl font-semibold mb-4 text-center">Welcome</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none"
        />

        <Button onClick={() => alert(`Hello, ${name || "Guest"}!`)}>
          Greet
        </Button>
      </div>
    </div>
  );
}

export default App;