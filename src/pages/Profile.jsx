import React from "react";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";
import { useAuth } from "../components/Auth";

const Profile = () => {
	const { userjon } = useAuth();

	return (
		<Box sx={{ display: "flex" }}>
			// <Sidebar />
			<Box component="main" sx={{ flexGrow: 1, p: 10, mt: 20 }}>
				<Box>
					<Box
						sx={{
							diplay: "block",
							width: "100%",
							height: "100%",
							backgroundColor: "aquamarine",
							borderRadius: "10px",
							padding: "10px",
							pl: "100px",
							mb: "20px",
						}}>
						<img src="./avatar.png" alt="" width={100} height={100} />
					</Box>
					{userjon ? (
						<Box>
							<h1>Username: {userjon.username}</h1>
							<h2>Password: {userjon.password}</h2>
						</Box>
					) : null}
				</Box>
			</Box>
		</Box>
	);
};

export default Profile;
