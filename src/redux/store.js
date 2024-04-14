import { combineReducers, createStore, applyMiddleware } from "redux";
import studentReducer from "../redux/students/usersReducer";
import teacherReducer from "../redux/teachers/usersReducer";
// import logger from "redux-logger";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
	student: studentReducer,
	teacher: teacherReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
