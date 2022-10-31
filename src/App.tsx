import React from 'react';
import { Route, Routes } from "react-router-dom"
// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <div className="bg-[#282c34] min-h-screen">
        <div className="flex flex-col justify-between h-full">
          <Navbar />

          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
