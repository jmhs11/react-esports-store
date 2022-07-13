import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";

const App = () => (
	<div id="layout" className="h-screen">
		<header className="bg-blue-500">asdasd</header>
		<aside className="bg-red-300">asdasdasdasdasdasdasd</aside>
		<main className="bg-yellow-200">
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</main>
	</div>
);

export default App;
