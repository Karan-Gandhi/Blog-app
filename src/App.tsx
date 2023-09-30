import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "./Snackbar";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import DefaultRoute from "./routes/DefaultRoute";
import LoginRoute from "./routes/LoginRoute";
import SignupRoute from "./routes/SignupRoute";
import LogoutRoute from "./routes/LogoutRoute";
import FeedRoute from "./routes/FeedRoute";
import CreateBlogRoute from "./routes/CreateBlogRoute";
import ViewBlogRoute from "./routes/ViewBlogRoute";

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<div className="w-full h-screen">
			<BrowserRouter>
				<SnackbarProvider>
					<Routes>
						<Route path="/" Component={DefaultRoute} />
						<Route path="/login" Component={LoginRoute} />
						<Route path="/signup" Component={SignupRoute} />

						<Route element={<AuthenticatedRoute />}>
							<Route path="/logout" Component={LogoutRoute} />
							<Route path="/feed" Component={FeedRoute} />
							<Route path="/createBlog" Component={CreateBlogRoute} />
							<Route path="/blogs/:id" Component={ViewBlogRoute} />
						</Route>
					</Routes>

					{/* <Footer /> */}
				</SnackbarProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
