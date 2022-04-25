import React from 'react';

import './app.css';

import Navbar from './Navbar';
import UpperBody from './UpperBody';
import MiddleBody from './MiddleBody';
import Footer from './Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  /* set homepage opacity to 0.2 */
  const [css, setCss] = React.useState({
    app: '',
    instructor: '',
  });

  /* change opacity function passing down to child */
  function changeOpacity() {
    setCss((prev) => {
      return {
        ...prev,
        app: 'app',
      };
    });
  }

  function changeInstructor(instructorCategory) {
    setCss((prev) => {
      return {
        ...prev,
        instructor: instructorCategory,
      };
    });
  }

  return (
    <section id={css.app.length ? css.app : ''}>
      <Navbar />
      <UpperBody />
      <MiddleBody />
      <Footer
        css={css}
        changeOpacity={changeOpacity}
        changeInstructor={changeInstructor}
      />
    </section>
  );
}

export default App;
