import { Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import About from "./templates/About";
import Contact from "./templates/Contact";
import Navigationbar from "./Navbar";
import Projects from "./templates/projects";

function App() {
	return (
		<>
			<Navigationbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</>
	);
}

export default App;
