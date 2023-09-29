import { useEffect, useState } from "react";
import { Navigate as Redirect } from "react-router";
import { userIsLoggedIn } from "../api/Auth";
import DefaultLoader from "../components/DefaultLoader";

interface DefaultRouteProps {}

const DefaultRoute: React.FC<DefaultRouteProps> = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [redirectToHomeRoute, setRedirectToHomeRoute] = useState<boolean>(false);

	useEffect(() => {
		userIsLoggedIn()
			.then(res => {
				setLoading(false);
				if (res) setRedirectToHomeRoute(true);
				else setRedirectToHomeRoute(false);
			})
			.catch(error => {});
	}, []);

	if (isLoading) {
		return (
			<div className="w-full h-screen">
				<DefaultLoader />
			</div>
		);
	} else if (redirectToHomeRoute) {
		return <Redirect to="/feed" />;
	} else {
		return <Redirect to="/login" />;
	}
};

export default DefaultRoute;
