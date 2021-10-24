import React, { Suspense } from "react";
import { Provider as JotaiProvider } from "jotai";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import PostPage from "./pages/Posts/PostPage";
import ProfilePage from './pages/Profile/Profile'
import NotificationPage from "./pages/Notification/NotificationPage";
import ChatPage from "./pages/Chat/ChatPage";
import ContactPage from "./pages/Contacts/ContactsPage";
import MenuPage from "./pages/Menu/MenuPage";
import GalleryPage from "./pages/Gallery/GalleryPage";
import useQueryString from "./hooks/useQueryString";
import ResolutionNotSoported from "./components/ResolutionNotSoported/ResolutionNotSoported";
import PostEditor from "./pages/PostEditor/PostEditor";

const Menu = () => <>
	<ul>
		<li><Link to="/profile/edit">Mi perfil</Link></li>
		<li><Link to="/posts">Posts</Link></li>
		<li><Link to="/login">Login</Link></li>
		<li><Link to="/notifications">Notification</Link></li>
		<li><Link to="/chat">Chat</Link></li>
		<li><Link to="/contacts">Contacts</Link></li>
	</ul>
</>

const Routes = () => {
	return <Suspense fallback={<>Loading</>}>
		<Router>
			<Switch>
				<Route path="/" exact>
					<MenuPage />
				</Route>
				<Route path="/profile/edit" exact>
					<ProfilePage />
				</Route>
				<Route path="/posts" exact>
					<PostPage />
				</Route>
				<Route path="/posts/edit/">
					<PostEditor />
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
				<Route path="/contacts" exact>
					<ContactPage />
				</Route>
				<Route path="/gallery" exact>
					<GalleryPage />
				</Route>
			</Switch>
		</Router>
	</Suspense>
}

function App() {
	const isMobile = useQueryString();

	if(!isMobile) return <ResolutionNotSoported />

	return (
		<JotaiProvider>
			<Routes />
		</JotaiProvider>
	);
}

export default App;
