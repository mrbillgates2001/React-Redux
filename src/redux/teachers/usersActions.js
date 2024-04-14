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

export const fetchUsersSucces = (teachers) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: teachers,
	};
};

export const fetchUsersError = (error) => {
	return {
		type: FETCH_USERS_ERROR,
		payload: error,
	};
};

export const fetchTeachers = () => {
	return (dispatch) => {
		dispatch(fetchUsersRequest());
		axios
			.get("http://localhost:3000/teachers")
			.then((res) => {
				const data = res.data;
				dispatch(fetchUsersSucces(data));
			})
			.catch((err) => {
				dispatch(fetchUsersError(err.message));
			});
	};
};
