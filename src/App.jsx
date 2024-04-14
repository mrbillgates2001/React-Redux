import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import NotFound from "./pages/NotFound";
import EditTeacher from "./components/EditTeacher";
import EditStudent from "./components/EditStudent";
import { AuthProvider } from "./components/Auth";
import RequiredAuth from "./components/RequiredAuth";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<AuthProvider>
					<Routes>
						<Route
							path="/"
							element={
								<RequiredAuth>
									<Home />
								</RequiredAuth>
							}
						/>
						<Route
							path="/about"
							element={
								<RequiredAuth>
									<About />
								</RequiredAuth>
							}
						/>
						<Route
							path="/contacts"
							element={
								<RequiredAuth>
									<Contacts />
								</RequiredAuth>
							}
						/>
						<Route path="/login" element={<Login />} />
						<Route
							path="/profile"
							element={
								<RequiredAuth>
									<Profile />
								</RequiredAuth>
							}
						/>
						<Route
							path="/students"
							element={
								<RequiredAuth>
									<Students />
								</RequiredAuth>
							}
						/>
						<Route
							path="/teachers"
							element={
								<RequiredAuth>
									<Teachers />
								</RequiredAuth>
							}
						/>
						<Route
							path="/teachers/editteacher/:id"
							element={
								<RequiredAuth>
									<EditTeacher />
								</RequiredAuth>
							}
						/>
						<Route
							path="/students/editstudent/:id"
							element={
								<RequiredAuth>
									<EditStudent />
								</RequiredAuth>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</AuthProvider>
			</Router>
		</React.Fragment>
	);
};

export default App;
