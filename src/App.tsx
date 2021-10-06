import React, { Suspense } from "react";
import { Provider as JotaiProvider } from "jotai";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import PostPage from "./pages/Posts/PostPage";

const Routes = () => {
	return <Suspense fallback={<>Loading</>}>
		<Router>
			<Switch>
				<Route path="/" exact>
					<PostPage />
				</Route>
				<Route path="/posts" exact>
					<PostPage />
				</Route>
			</Switch>
		</Router>
	</Suspense>
}

function App() {
	return (
		<JotaiProvider>
			<Routes />
		</JotaiProvider>
	);
}

export default App;
