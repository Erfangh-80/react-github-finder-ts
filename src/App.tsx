import React from 'react';
import { Route } from "react-router-dom"

// components
import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <div className="bg-[#282c34] min-h-screen">
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main>
          content
        </main>
      </div>
    </div>
  );
}

export default App;
