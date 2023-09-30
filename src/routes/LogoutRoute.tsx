import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { logout } from "../api/Auth";
import DefaultLoader from "../components/DefaultLoader";

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
	const [isLodggedOut, setLoggedOut] = useState<boolean>(false);

	useEffect(() => {
		logout()
			.then(() => setLoggedOut(true))
			.catch(error => {});
	}, []);

	if (isLodggedOut) return <Navigate to="/" />;

	return (
		<div className="w-full h-screen">
			<DefaultLoader />
		</div>
	);
};

export default Logout;
