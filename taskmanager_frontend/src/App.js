import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feladatok from "./pages/Feladatok"
import Felhasznalok from "./pages/Felhasznalok"
import Layout from "./pages/Layout"
import UjFeladat from "./pages/UjFeladat"
import './App.css'

function App() {
	return (
		<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Feladatok />} />
							<Route path="new_task" element={<UjFeladat />} />
							<Route path="users" element={<Felhasznalok />} />
						</Route>
					</Routes>
				</BrowserRouter>
		</div>
	)
}

export default App
