import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form } from './components/Form';

function App() {
	return (
	  <BrowserRouter>
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Form />} />
			</Routes>
		</div>
	  </BrowserRouter>
	);
}

export default App;
