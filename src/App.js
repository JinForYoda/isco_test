import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';
import './styles/test1.css'
import './styles/test2.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Header from './components/Header';


function App() {
	return (

		<BrowserRouter basename="/isco_test">
			<Header />
			<Routes>
				<Route element={<Test1 />} path='/test1' />
				<Route element={<Test2 />} path='/test2' />
				<Route path='*' element={<Test1 />} />
			</Routes>
		</BrowserRouter>

	);
}

export default App;
