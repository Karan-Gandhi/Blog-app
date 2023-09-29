import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { SnackbarProvider } from "./Snackbar";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import DefaultRoute from "./routes/DefaultRoute";
import LoginRoute from "./routes/LoginRoute";
import SignupRoute from "./routes/SignupRoute";
// import LogoutRoute from "./routes/LogoutRoute";

interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<div>
			<BrowserRouter>
				<SnackbarProvider>
					<Switch>
						<Route path="/" Component={DefaultRoute} />
						<Route path="/login" Component={LoginRoute} />
						<Route path="/signup" Component={SignupRoute} />

						{/* <AuthenticatedRoute path="/teams/*" component={TeamsRoute} />
						<AuthenticatedRoute path="/activity" component={TeamsRoute} exact />
						<AuthenticatedRoute path="/todo" component={TeamsRoute} exact /> */}
						{/* <AuthenticatedRoute path="/logout" component={LogoutRoute} exact /> */}
					</Switch>
				</SnackbarProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
