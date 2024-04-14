import * as React from "react";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Contacts = () => {
	return (
		<Box sx={{ display: "flex" }}>
			// <Sidebar />
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10, ml: 10 }}>
				<Card sx={{ maxWidth: 545 }}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image="./contacts.jpg"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							Contacts
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Address: 14th Avenue, Suite MO, USA 🏢
						</Typography>
					</CardContent>
					<CardActions>
						<span>Phone: </span>
						<Button size="small">📞 +1 985 465 5623</Button>
					</CardActions>
					<CardActions>
						<span>Email: </span>
						<Button size="small">📧 info@students.com</Button>
					</CardActions>
				</Card>
			</Box>
		</Box>
	);
};

export default Contacts;
