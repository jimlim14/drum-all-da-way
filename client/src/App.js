import React from 'react';

import './app.css';

import Navbar from './Navbar';
import UpperBody from './UpperBody';
import MiddleBody from './MiddleBody';
import Footer from './Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	//toast('hello world'); // this is working
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
