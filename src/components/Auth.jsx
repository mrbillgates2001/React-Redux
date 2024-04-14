import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AuthContext = createContext("Shahboz");
export const AuthProvider = ({ children }) => {
	const [userjon, setUserjon] = useState("Shahboz");

	const login = async(user) => {
        try {
            axios.put(`https://localhost:3000/`)
        } catch (error) {
            
        }
		setUserjon(user);
	};

	const logout = () => {
		setUserjon(null);
	};

	return (
		<AuthContext.Provider value={{ userjon, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (userjon) => useContext(AuthContext);
