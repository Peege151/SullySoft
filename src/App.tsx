import React from "react";
import "./App.css";
import Masthead from "./components/Masthead.tsx";
import Team from "./components/Team.tsx";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Jobs } from "./pages/Jobs.tsx";

function App() {
	return (
		<div className="App">
			<nav style={styles.nav}>
				<div style={styles.first}>
					<Link style={styles.link} to="/">
						SullySoft
					</Link>
				</div>
				<div style={styles.item}>
					<a
						style={styles.link}
						href="mailto:patrick@sullysoft.com"
						target="_blank"
					>
						Contact
					</a>
				</div>
				<div style={styles.last}>
					<Link style={styles.link} to="/jobs">
						Jobs
					</Link>
				</div>
			</nav>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/jobs" element={<Jobs />}></Route>
			</Routes>
		</div>
	);
}
const styles = {
	nav: {
		height: 100,
		display: "flex",
		backgroundColor: "rgba(255,255,255,.5)",
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	first: {
		marginRight: "auto",
		marginLeft: "50px",
		justifyContent: "flex-start",
		fontFamily: "Coral",
		position: "relative" as any,
		top: "6px",
	},
	item: {
		color: "black",
		padding: 10,
		textDecoration: "none",
	},
	last: {
		color: "black",
		marginRight: 40,
		textDecoration: "none",
	},
	link: {
		textDecoration: "none",
		color: "black",
	},
};
export default App;
