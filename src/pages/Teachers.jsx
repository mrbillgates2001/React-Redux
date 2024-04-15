import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, TextField, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTeacher from "../components/AddTeacher";
import EditTeacher from "../components/EditTeacher";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../redux/teachers/usersActions";
import Form from "react-bootstrap/Form";

const Teachers = () => {
	const [search, setSearch] = React.useState("");
	const dispatch = useDispatch();
	const { teachers, loading, error } = useSelector((state) => state.teacher);
	const [filteredUser, setFilteredUser] = React.useState(teachers);
	const [selectedFilter, setSelectedFilter] = React.useState("");

	console.log(teachers.length);
	React.useEffect(() => {
		dispatch(fetchTeachers());
	}, [filteredUser, fetchTeachers]);

	///////////////// DELETE /////////////////

	const handleDelete = async (id) => {
		try {
			if (confirm("Are you sure you want to delete this user? ❌")) {
				const res = await axios.delete(`http://localhost:3000/teachers/${id}`);
				const data = await res.data;
				console.log("successfully deleted", data);
				setDeleteUser(deleteUser.filter((user) => user.id !== id));
			}
		} catch (error) {
			console.log(error.message);
		} finally {
			dispatch(fetchTeachers());
		}
	};

	//////////////// FILTER //////////////////

	// const handleFilterChange = (e) => {
	// 	const filterValue = e.target.value;
	// 	setSelectedFilter(filterValue);

	// 	if (filterValue !== "All Groups") {
	// 		const filtered = teachers.filter((user) => user.group === filterValue);
	// 		setFilteredUser(filtered);
	// 		dispatch(fetchTeachers);
	// 	} else {
	// 		setFilteredUser(teachers);
	// 		dispatch(fetchTeachers);
	// 	}
	// };

	// const handleFilterChange = (e) => {
	// 	const filterValue = e.target.value;
	// 	setSelectedFilter(filterValue);

	// 	if (filterValue !== "All Groups") {
	// 	  const filtered = teachers.filter((teacher) => teacher.group === filterValue && teacher.fullname.toLowerCase().includes(search.toLowerCase()));
	// 	  setFilteredUser(filtered);
	// 	} else {
	// 	  const filtered = teachers.filter((teacher) => teacher.fullname.toLowerCase().includes(search.toLowerCase()));
	// 	  setFilteredUser(filtered);
	// 	}
	//   };

	// const handleFilterChange = (e) => {
	// 	const filterValue = e.target.value;
	// 	setSelectedFilter(filterValue);

	// 	if (filterValue !== "All Groups") {
	// 		const filtered = teachers.filter(
	// 			(teacher) =>
	// 				teacher.group === filterValue &&
	// 				teacher.fullname.toLowerCase().includes(search.toLowerCase())
	// 		);
	// 		setFilteredUser(filtered);
	// 	} else {
	// 		const filtered = teachers.filter((teacher) =>
	// 			teacher.fullname.toLowerCase().includes(search.toLowerCase())
	// 		);
	// 		setFilteredUser(filtered);
	// 	}
	// };

	// const handleFilterChange = (e) => {
	// 	const filterValue = e.target.value;
	// 	setSelectedFilter(filterValue);

	// 	const filtered = teachers.filter((teacher) => {
	// 		return (
	// 			(filterValue === "All Groups" || teacher.group === filterValue)  &&
	// 			teacher.fullname.toLowerCase().includes(search.toLowerCase())
	// 		);
	// 	});

	// 	setFilteredUser(filtered);
	// };

	const handleFilterChange = (e) => {
		const filterValue = e.target.value;
		setSelectedFilter(filterValue);

		const filtered = teachers.filter((teacher) => {
			const isNameMatch = teacher.fullname
				.toLowerCase()
				.includes(search.toLowerCase());
			const isGroupMatch =
				filterValue === "All Groups" || teacher.group === filterValue;
			return isGroupMatch && isNameMatch;
		});

		setFilteredUser(filtered);
	};

	return (
		<Box sx={{ display: "flex" }}>
			// <Sidebar />
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10 }}>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						py: 2,
					}}>
					<Typography variant="h5" sx={{ mb: "15px" }}>
						Teachers
					</Typography>
					<TextField
						id="standard-search"
						label="🔍 Search by name..."
						type="search"
						variant="outlined"
						onChange={(e) => setSearch(e.target.value)}
						sx={{
							width: "600px",
							outline: "none",
						}}
					/>

					<Form.Select
						value={selectedFilter}
						onChange={handleFilterChange}
						style={{ width: "200px", fontSize: "16px" }}
						size="small"
						aria-label="Default select example">
						<option value="All Groups">All Groups</option>
						<option value="Group 1">Group 1</option>
						<option value="Group 2">Group 2</option>
						<option value="Group 3">Group 3</option>
						<option value="Group 4">Group 4</option>
					</Form.Select>

					<AddTeacher fetchTeachers={fetchTeachers} />
				</Box>
				<Paper sx={{ width: "100%", overflow: "hidden" }}>
					<TableContainer sx={{ maxHeight: 440 }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow sx={{ width: 100 }}>
									<TableCell>ID</TableCell>
									<TableCell>Fullname</TableCell>
									<TableCell>Group</TableCell>
									<TableCell>Level</TableCell>
									<TableCell>Phone</TableCell>
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{filteredUser.length > 0
									? filteredUser
											.filter((teacher) => {
												return search.toLocaleLowerCase() === ""
													? teacher
													: teacher.fullname
															.toLocaleLowerCase()
															.includes(search);
											})
											.map((teacher, index) => (
												<TableRow key={teacher.id}>
													<TableCell component="th" scope="row">
														{index + 1}
													</TableCell>
													<TableCell>{teacher.fullname}</TableCell>
													<TableCell>{teacher.group}</TableCell>
													<TableCell>{teacher.level}</TableCell>
													<TableCell>{teacher.phone}</TableCell>
													<TableCell
														sx={{
															display: "flex",
															alignItems: "center",
															gap: "10px",
														}}>
														<Link to={`/teachers/editteacher/${teacher.id}`}>
															<EditTeacher />
														</Link>
														<Button
															variant="outlined"
															color="error"
															onClick={() => handleDelete(teacher.id)}>
															<DeleteIcon />
														</Button>
													</TableCell>
												</TableRow>
											))
									: teachers
											.filter((teacher) => {
												return search.toLocaleLowerCase() === ""
													? teacher
													: teacher.fullname
															.toLocaleLowerCase()
															.includes(search);
											})
											.map((teacher, index) => (
												<TableRow key={teacher.id}>
													<TableCell component="th" scope="row">
														{index + 1}
													</TableCell>
													<TableCell>{teacher.fullname}</TableCell>
													<TableCell>{teacher.group}</TableCell>
													<TableCell>{teacher.level}</TableCell>
													<TableCell>{teacher.phone}</TableCell>
													<TableCell
														sx={{
															display: "flex",
															alignItems: "center",
															gap: "10px",
														}}>
														<Link to={`/teachers/editteacher/${teacher.id}`}>
															<EditTeacher />
														</Link>
														<Button
															variant="outlined"
															color="error"
															onClick={() => handleDelete(teacher.id)}>
															<DeleteIcon />
														</Button>
													</TableCell>
												</TableRow>
											))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Box>
		</Box>
	);
};

export default Teachers;
