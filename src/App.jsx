import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import WorkEx from "./components/WorkEx";
import Projects from "./components/Projects";
import Participations from "./components/Participations";
import Contact from "./components/Contact";
import Outro from "./components/Outro";

import Footer from "./components/Footer";

import { FaArrowUp } from "react-icons/fa";


function App() {

	return (
		<div className="App">
			<header className="App-header fixed w-full top-0 z-10 shadow-sm transition-all duration-300 hover:shadow-slate-300">
				<Navbar />
			</header>
			<main className="text-lg p-5 h-full justify-evenly items-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
				<Hero />
				<div className="my-6 flex flex-row-reverse flex-wrap">
					<Education />
					<WorkEx />
				</div>
				<Projects />
				<Participations />
				<Contact />
				<Outro />
			</main>
			<a href="/#" id="backtotop" className="p-4 m-4 w-fit z-50 fixed bottom-0 right-0 text-xl rounded-full bg-slate-600 text-slate-900 opacity-80 ring-white transition duration-300 hover:opacity-100 hover:ring-2">
				<FaArrowUp color="white" />
			</a>
			<Footer />
		</div>
	);
}

export default App;
