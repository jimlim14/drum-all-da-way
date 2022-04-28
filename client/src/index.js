import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './About';
import Book from './Book';
import Instructors from './Instructors';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='about' element={<About />} />

      <Route path='book' element={<Book />} />

      <Route path='instructors' element={<Instructors />} />
    </Routes>
  </BrowserRouter>
);
