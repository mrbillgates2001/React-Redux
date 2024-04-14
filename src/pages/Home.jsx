import Sidebar from "../components/Sidebar";
import { Box, Typography } from "@mui/material";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Home = () => {
	return (
		<Box sx={{ display: "flex" }}>
			// <Sidebar />
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10 }}>
        <Typography variant="h4" sx={{mb: 5}}>
          Welcome to Admin Dashboard
        </Typography>
        <Typography variant="h6" sx={{mb: 5}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim totam maxime tempore corrupti. Harum aperiam magni sunt facilis. Enim et excepturi quidem architecto sit quod iusto voluptatem maxime explicabo autem
        </Typography>
				<BarChart
					series={[
						{ data: [35, 44, 24, 34] },
						{ data: [51, 6, 49, 30] },
						{ data: [15, 25, 30, 50] },
						{ data: [60, 50, 15, 25] },
					]}
					height={290}
					xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
					margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
				/>
			</Box>
		</Box>
	);
};

export default Home;
