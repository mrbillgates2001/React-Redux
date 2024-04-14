import {
	FETCH_USERS_ERROR,
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
} from "./usersTypes";

const initialState = {
	loading: false,
	teachers: [],
	error: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				teachers: action.payload,
			};
		case FETCH_USERS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
