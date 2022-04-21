import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import Instructors from './Instructors';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetStarted from './GetStarted';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='instructors' element={<Instructors />} />
			<Route path='getstarted' element={<GetStarted />} /> */}
		</Routes>
	</BrowserRouter>
);
