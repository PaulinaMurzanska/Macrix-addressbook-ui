import React from 'react';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './views/MainPage';
import ContactContext from './context/ContactContex';
import EditContext from './context/EditContext';

function App() {
	return (
		<ContactContext>
			<EditContext>
				<BrowserRouter>
					<MainTemplate>
						<Routes>
							<Route path='/' element={<MainPage />} />
						</Routes>
					</MainTemplate>
				</BrowserRouter>
			</EditContext>
		</ContactContext>
	);
}

export default App;
