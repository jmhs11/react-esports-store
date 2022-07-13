import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Error404 from './pages/Error404';
import Header from './components/Header';
import Aside from './components/Aside';

const App = () => (
	<div id='layout' className='h-screen'>
		<Header />
		<Aside />
		<main>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</main>
	</div>
);

export default App;
