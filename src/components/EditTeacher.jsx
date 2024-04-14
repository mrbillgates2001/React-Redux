import { Label, Select } from "flowbite-react";
import React, { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button } from "@mui/material";

const EditTeacher = () => {
	const [show, setShow] = useState(false);
	const [users, setUsers] = useState("");
	const [editUser, setEditUser] = useState({
		fullname: "",
		group: "",
		level: "",
		phone: "",
	});
	const { id } = useParams();

	const handleClose = () => {
		setShow(false);
		navigate("/teachers");
	};
	const handleShow = () => setShow(true);
	const navigate = useNavigate();

	const fetchTeachers = async () => {
		try {
			const res = await axios.get("http://localhost:3000/teachers");
			const data = await res.data;
			setUsers(data);
			console.log(data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const fetchTeachersData = async () => {
		try {
			const response = await axios.get(`http://localhost:3000/teachers/` + id);
			const data = await response.data;
			handleShow();
			setEditUser(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTeachersData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(
				`http://localhost:3000/teachers/` + id,
				editUser
			);
			setEditUser(response.data);
			console.log("User updated", response.data);
			fetchTeachers();
		} catch (error) {
			console.log(error.message);
		} finally {
			fetchTeachers();
			navigate("/teachers");
		}
	};

	return (
		<div>
			<Button variant="outlined" color="warning">
				<EditNoteIcon />
			</Button>

			<Modal show={show} onHide={handleClose} className="m-4">
				<Modal.Header closeButton>
					<Modal.Title>Update user info</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-1" controlId="fullname">
							<Form.Label>Fullname</Form.Label>
							<Form.Control
								onChange={(e) =>
									setEditUser({ ...editUser, fullname: e.target.value })
								}
								value={editUser.fullname}
								type="fullname"
								placeholder="John Smith"
								autoFocus
							/>
						</Form.Group>
						<Form.Group className="mb-1" controlId="group">
							<Form.Label>Group</Form.Label>
							<Select
								onChange={(e) =>
									setEditUser({ ...editUser, group: e.target.value })
								}
								value={editUser.group}
								required>
								<option>Choose your group</option>
								<option>Group 1</option>
								<option>Group 2</option>
								<option>Group 3</option>
								<option>Group 4</option>
							</Select>
						</Form.Group>
						<Form.Group className="mb-1" controlId="level">
							<Form.Label>Level</Form.Label>
							<Select
								onChange={(e) =>
									setEditUser({ ...editUser, level: e.target.value })
								}
								value={editUser.level}
								required>
								<option>Choose your level</option>
								<option>Junior</option>
								<option>Middle</option>
								<option>Senior</option>
							</Select>
						</Form.Group>
						<Form.Group className="mb-1" controlId="phone">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="phone"
								placeholder="+998(90)-123-45-67"
								onChange={(e) =>
									setEditUser({ ...editUser, phone: e.target.value })
								}
								value={editUser.phone}
								required
								autoFocus
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button type="submit" variant="primary" onClick={handleSubmit}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default EditTeacher;
