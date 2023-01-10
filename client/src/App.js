import React from 'react';

import './app.css';

import Navbar from './components/Navbar/Navbar';
import UpperBody from './components/UpperBody/UpperBody';
import MiddleBody from './components/Middle Body/MiddleBody';
import Footer from './components/Footer/Footer';

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
