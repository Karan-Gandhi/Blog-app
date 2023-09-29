import { useEffect, useState } from "react";
import { Navigate as Redirect, Route, RouteProps } from "react-router";
// import { userIsLoggedIn } from "../api/Auth";
import Loader from "./DefaultLoader";
// import MainSidebar from "./MainSidebar";

type AuthenticatedRouteProps = RouteProps | { element: React.ElementType };

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ element: Component, ...rest }) => {
	const [isLoading, setLoading] = useState<boolean>(true);
	const [teamsIsLoaded, setTeamsIsLoaded] = useState<boolean>(true);
	const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false);

	// useEffect(() => {
	// 	userIsLoggedIn()
	// 		.then(status => {
	// 			setLoading(false);
	// 			setRedirectToLogin(!status);
	// 		})
	// 		.catch(error => {});
	// }, []);

	return (
		<Route
			{...rest}
			element={(props => {
				if (isLoading || !teamsIsLoaded)
					return (
						<div className="h-screen">
							<Loader />
						</div>
					);
				if (redirectToLogin) return <Redirect to="/login" />;
				else if (!redirectToLogin && !isLoading)
					return (
						<div className="w-screen h-screen flex text-white">
							{/* <MainSidebar /> */}
							<div className="w-full h-full">
								{/* @ts-ignore */}
								<Component {...props} />
							</div>
						</div>
					);
			})()}
		/>
	);
};

export default AuthenticatedRoute;
