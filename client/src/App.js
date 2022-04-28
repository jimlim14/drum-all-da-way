import React from 'react';

import './app.css';

import Navbar from './Navbar';
import UpperBody from './UpperBody';
import MiddleBody from './MiddleBody';
import Footer from './Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <section>
      <Navbar />
      <UpperBody />
      <MiddleBody />
      <Footer />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}

export default App;
