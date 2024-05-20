import React from "react";

import Masthead from "../components/Masthead.tsx";
import Team from "../components/Team.tsx";

export function Home() {
	return (
		<div style={{ padding: 20 }}>
			<Masthead />
			<Team />
		</div>
	);
}
