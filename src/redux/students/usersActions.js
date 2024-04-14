import axios from "axios";
import {
	FETCH_USERS_ERROR,
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
} from "./usersTypes";

export const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

export const fetchUsersSucces = (students) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: students,
	};
};

export const fetchUsersError = (error) => {
	return {
		type: FETCH_USERS_ERROR,
		payload: error,
	};
};

export const fetchStudents = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest());
		axios
			.get("http://localhost:3000/students")
			.then((res) => {
				const data = res.data;
				dispatch(fetchUsersSucces(data));
			})
			.catch((err) => {
				dispatch(fetchUsersError(err.message));
			});
	};
};
