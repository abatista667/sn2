import React, { Suspense } from "react";
import { Provider as JotaiProvider } from "jotai";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import PostPage from "./pages/Posts/PostPage";
import ProfilePage from './pages/Profile/Profile'
import NotificationPage from "./pages/Notification/NotificationPage";
import ChatPage from "./pages/Chat/ChatPage";

const Menu = () => <>
	<ul>
		<li><Link to="/profile">Mi perfil</Link></li>
		<li><Link to="/posts">Posts</Link></li>
		<li><Link to="/login">Login</Link></li>
		<li><Link to="/notifications">Notification</Link></li>
		<li><Link to="/chat">Chat</Link></li>
	</ul>
</>

const Routes = () => {
	return <Suspense fallback={<>Loading</>}>
		<Router>
			<Switch>
				<Route path="/" exact>
					<Menu />
				</Route>
				<Route path="/profile" exact>
					<ProfilePage />
				</Route>
				<Route path="/posts" exact>
					<PostPage />
				</Route>
				<Route path="/login" exact>
					<Login />
				</Route>
				<Route path="/notifications" exact>
					<NotificationPage />
				</Route>
				<Route path="/chat" exact>
					<ChatPage />
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
