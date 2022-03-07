import React from 'react';
import './App.css';

// reat router d
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// component
import Header from './components/Header/Header';
import ResponsiveNavigation from './components/ResponsiveNavigation/ResponsiveNavigation';

//cont
import { ItemsProvider } from './context/ItemsContext';

//view
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Shop from './views/Shop/Shop';
import CelularDetail from './views/CelularDetail/CelularDetail';
import GenderType from './views/GenderType/GenderType';


//Asigno las rutas para llegar a cada view 
const App = () => {
	return (
		<Router>
			<ItemsProvider>
				<div className='App'>
					<Header />
					<ResponsiveNavigation />
					
					<Routes> 
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/details/:id' element={<CelularDetail />} />
						<Route path='/gama/:gama' element={<GenderType />} />
					</Routes>
				</div>
			</ItemsProvider>
		</Router>
	);
};

export default App;
