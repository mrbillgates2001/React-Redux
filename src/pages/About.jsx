import React from "react";
import Sidebar from "../components/Sidebar";
import { Box, Typography } from "@mui/material";

const About = () => {
	return (
		<Box sx={{ display: "flex" }}>
			// <Sidebar />
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10}}>
				<Typography variant="h3">
					About
				</Typography>
				<br />
				<Typography variant="h5">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur iste fugit quae necessitatibus sed libero. Et maiores culpa, molestias voluptatem animi, illo nobis aperiam fugit quam, numquam quibusdam mollitia. Ratione
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo commodi eos quod, tempora veritatis labore aperiam dolorem magnam dicta quia accusamus nisi voluptates dolore! Minus aperiam at voluptate deleniti vel
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nesciunt est molestias distinctio, quis iusto dolorum, incidunt magnam ratione ducimus aspernatur eligendi a sapiente deleniti nisi ex fugit, quasi molestiae.
				</Typography>
			</Box>
		</Box>
	);
};

export default About;
