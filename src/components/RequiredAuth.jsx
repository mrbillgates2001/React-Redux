import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const RequiredAuth = ({ children }) => {
	const { userjon } = useAuth();
	return userjon.username ? children : <Navigate to="/login" />;
};

export default RequiredAuth;
