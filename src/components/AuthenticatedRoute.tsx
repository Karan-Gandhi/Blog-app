import { useEffect, useState } from "react";
import { Navigate, Outlet, RouteProps } from "react-router";
import { userIsLoggedIn } from "../api/Auth";
import Loader from "./DefaultLoader";

type AuthenticatedRouteProps = RouteProps | { element: React.ElementType };

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({ element: Component, ...rest }) => {
	const [isLoading, setLoading] = useState<boolean>(true);
	const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false);

	useEffect(() => {
		userIsLoggedIn()
			.then(status => {
				setLoading(false);
				setRedirectToLogin(!status);
			})
			.catch(error => {});
	}, []);

	return isLoading ? (
		<div className="h-screen">
			<Loader />
		</div>
	) : redirectToLogin ? (
		<Navigate to="/login" replace />
	) : (
		<div className="w-screen h-screen flex text-white">
			<div className="w-full h-full">
				<Outlet />
			</div>
		</div>
	);
};

export default AuthenticatedRoute;
