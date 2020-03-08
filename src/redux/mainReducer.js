import { combineReducers } from "redux";
import taskReducer from "./task/task.reducer";

export default combineReducers({
    /* Add all reducers here as a key-value pair */
    task: taskReducer
});
