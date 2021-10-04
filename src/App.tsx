import React from "react";
import { Provider as JotaiProvider } from "jotai";
import Login from "./pages/Login/Login";

function App() {
	return (
		<JotaiProvider>
				<Login />
		</JotaiProvider>
	);
}

export default App;
