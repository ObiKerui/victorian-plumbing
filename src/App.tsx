import React from 'react';
import logo from './logo.svg';
import { ProductList } from './Components/ProductList';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center">
        <img src={logo} className="h-32 w-32 animate-spin-slow" alt="logo" />
        <p className="mt-6 text-lg text-gray-700">
          Edit{' '}
          <code className="font-mono text-lg text-gray-900">src/App.tsx</code>{' '}
          and save to reload.
        </p>
        <a
          className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-semibold"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold">
          Welcome to DaisyUI with Tailwind CSS
        </h1>
        <button className="btn btn-primary mt-4">Click Me</button>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
