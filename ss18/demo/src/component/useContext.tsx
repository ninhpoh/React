import React, { useState, useMemo } from 'react';

function FibonacciCalculator() {
  const [num, setNum] = useState(10);
  const [darkMode, setDarkMode] = useState(false);

  // Hàm tính số Fibonacci (đệ quy, không tối ưu)
  const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  };

  // useMemo để tránh tính lại khi không cần thiết
  const fibResult = useMemo(() => fib(num), [num]);

  const themeStyles = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: '2rem',
    marginTop: '1rem',
  };

  return (
    <div>
      <h2>Fibonacci Calculator</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
      <div style={themeStyles}>
        Result: {fibResult}
      </div>
    </div>
  );
}

export default FibonacciCalculator;