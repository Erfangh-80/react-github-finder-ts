import React from 'react';
import { Route } from "react-router-dom"

// components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="bg-[#282c34] min-h-screen">
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          content
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
