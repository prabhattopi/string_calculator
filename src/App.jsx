import { useState } from 'react';
import { add } from './utils/addFunction';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">String Calculator</h1>
      <textarea
      style={{
        resize:"none"
      }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
        className="border p-2 rounded mb-4 w-full max-w-md"
      />
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Calculate
      </button>
      {result !== null && (
        <div className="mt-4 p-4 border rounded bg-green-100">
          <strong>Result:</strong> {result}
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 border rounded bg-red-100">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}

export default App;
